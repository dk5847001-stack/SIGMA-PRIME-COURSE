import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({requiredRole}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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
      };
      checkAuth();  
    }, []);

    if(loading){
        return <h2>Checking authentication...</h2>;
    };

    // if user is not login
    if(!user){
        return <Navigate to="/login" replace />
    }

    // check required role
    if(requiredRole && user.role !== requiredRole){
        return <Navigate to="/profile" replace />
    }

    // Authentication successful
    return <Outlet />;
}