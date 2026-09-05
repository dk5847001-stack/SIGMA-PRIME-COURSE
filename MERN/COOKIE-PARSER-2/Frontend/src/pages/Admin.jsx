import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {

    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchAdminDashboard = async () => {

            try {

                const response = await fetch(
                    "http://localhost:3000/admin/deshboard",
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );

                const data = await response.json();

                if (!response.ok) {

                    setError(
                        data.message || "Access denied!"
                    );

                    return;
                }

                setMessage(data.message);

            } catch (error) {

                console.error(error);

                setError(
                    "Unable to connect with server!"
                );

            } finally {

                setLoading(false);

            }
        };

        fetchAdminDashboard();

    }, []);

    if (loading) {

        return (
            <div className="center-page">

                <div className="loader"></div>

                <p>
                    Checking admin access...
                </p>

            </div>
        );

    }

    if (error) {

        return (
            <div className="center-page">

                <div className="error-card">

                    <div className="big-icon">
                        🚫
                    </div>

                    <h2>
                        Access Denied
                    </h2>

                    <p>
                        {error}
                    </p>

                    <button
                        onClick={() => navigate("/login")}
                        className="primary-btn"
                    >
                        Login
                    </button>

                </div>

            </div>
        );

    }

    return (
        <div className="dashboard-page">

            <div className="admin-card">

                <div className="admin-icon">
                    👑
                </div>

                <span className="admin-badge">
                    ADMIN ACCESS
                </span>

                <h1>
                    Admin Dashboard
                </h1>

                <p>
                    {message}
                </p>

                <div className="admin-stats">

                    <div>
                        <strong>🔐</strong>
                        <span>Protected</span>
                    </div>

                    <div>
                        <strong>🛡️</strong>
                        <span>Admin Only</span>
                    </div>

                    <div>
                        <strong>JWT</strong>
                        <span>Authenticated</span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Admin;