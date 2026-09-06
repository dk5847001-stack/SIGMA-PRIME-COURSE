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

      // Loading spinner
    if (loading) {
    return (
        <div
            style={{
                position: "fixed",
                top: 100,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingTop: "30px",
                background: "rgba(15, 23, 42, 0.35)",
                backdropFilter: "blur(4px)",
                zIndex: 999999
            }}
        >
            <div
                style={{
                    width: "45px",
                    height: "45px",
                    border: "5px solid #cbd5e1",
                    borderTop: "5px solid #2563eb",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite"
                }}
            ></div>

            <style>
                {`
                    @keyframes spin {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                `}
            </style>
        </div>
    );
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