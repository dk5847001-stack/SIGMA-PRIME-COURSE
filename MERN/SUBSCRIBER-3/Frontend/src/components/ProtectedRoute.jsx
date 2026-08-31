import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {

    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {

        const verifyUser = async () => {

            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {

                const response = await fetch(
                    "http://localhost:3000/protected",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                if (response.ok) {
                    setAuthenticated(true);
                } else {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                }

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        verifyUser();

    }, []);

    if (loading) {
        return <h2>Checking authentication...</h2>;
    }

    if (!authenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}