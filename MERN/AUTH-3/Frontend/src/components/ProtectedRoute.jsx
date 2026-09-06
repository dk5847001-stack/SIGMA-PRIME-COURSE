import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({requiredRole}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const checkAuth = async () => {
            setLoading(true);
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
                }
            }catch(err){
                console.error("Authentication check faild! : ", err)
            }
            finally{
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    if(loading){
        return <p>Checking Authentication.............</p>
    }

    // if user is not login
    if(!user){
        return (
            <>
            <Navigate to="/login" replace state={{message: "Please login first!"}} />
            </>
        )
    };

    // if user don't have required role
    if(requiredRole && user.role !== requiredRole){
       return <Navigate to="unauthorized" replace />
    };
    return <Outlet />
}