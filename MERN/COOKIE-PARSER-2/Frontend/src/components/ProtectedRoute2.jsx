import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({requiredRole}){
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

   useEffect(()=>{
    const checkAuth = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/profile",
                {
                    method: "GET",
                    credentials: "include"
                }
            );
            const data = await response.json();
            console.log(data);
            if(response.ok && data.success){
                setUser(data.user);
            }else{
                setUser(null)
            }
        }catch(err){
            console.error("Authentication check faild:", err);
            setUser(null);
        }
        finally{
            setLoading(false)
        }
    }
    checkAuth();
   }, []);

   if(loading){
    return <h2>Authentication checking...</h2>
   };

//   if user is not login
if(!user){
    return(
        <>
        <Navigate to="/login" replace state={{message: "Please login first!"}} />
        </>
    )
}

// if user don't have required role
if(requiredRole && user.role !== requiredRole){
    return <Navigate to="/profile" replace />
}

return <Outlet />
};