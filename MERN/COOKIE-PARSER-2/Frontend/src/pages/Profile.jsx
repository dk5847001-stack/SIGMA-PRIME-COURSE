import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const response = await fetch(
                    "http://localhost:3000/api/profile",
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );

                const data = await response.json();

                if (!response.ok) {

                    setError(
                        data.message || "Please login first!"
                    );

                    return;
                }

                setUser(data.user);

            } catch (error) {

                console.error(error);

                setError(
                    "Unable to connect with server!"
                );

            } finally {

                setLoading(false);

            }
        };

        fetchProfile();

    }, []);

    if (loading) {

        return (
            <div className="center-page">
                <div className="loader"></div>
                <p>Loading profile...</p>
            </div>
        );

    }

    if (error) {

        return (
            <div className="center-page">

                <div className="error-card">

                    <h2>🔒 Authentication Required</h2>

                    <p>{error}</p>

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

            <div className="profile-card">

                <div className="profile-avatar">
                    {user.name.charAt(0).toUpperCase()}
                </div>

                <h1>
                    Welcome, {user.name}! 👋
                </h1>

                <p className="profile-subtitle">
                    Your account information
                </p>

                <div className="profile-info">

                    <div className="info-item">

                        <span>
                            👤 Name
                        </span>

                        <strong>
                            {user.name}
                        </strong>

                    </div>

                    <div className="info-item">

                        <span>
                            📧 Email
                        </span>

                        <strong>
                            {user.email}
                        </strong>

                    </div>

                    <div className="info-item">

                        <span>
                            🛡️ Role
                        </span>

                        <strong className="role-badge">
                            {user.role}
                        </strong>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Profile;