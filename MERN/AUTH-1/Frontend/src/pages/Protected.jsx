import { useEffect } from "react";

export default function Protected() {

    useEffect(() => {

        const fetchProtectedRoute = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await fetch(
                    "http://localhost:3000/protected",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await response.json();

                console.log(data);

            } catch (err) {

                console.log(err.message);

            }

        };

        fetchProtectedRoute();

    }, []);

    return (
        <div>
            <h2>You have access to protected route</h2>
        </div>
    );
}