import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {

        try {

            setLoading(true);

            const response = await fetch(
                "http://localhost:3000/logout",
                {
                    method: "GET",
                    credentials: "include"
                }
            );

            const data = await response.json();

            if (data.success) {
                navigate("/login");
            }

        } catch (error) {

            console.error("Logout Error:", error);

        } finally {

            setLoading(false);

        }
    };

    return (
        <nav className="navbar">

            <div className="navbar-container">

                <Link to="/" className="logo">
                    InternovaTech
                </Link>

                <div className="nav-links">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/profile">
                        Profile
                    </Link>

                    <Link to="/admin">
                        Admin
                    </Link>

                    <Link to="/login">
                        Login
                    </Link>

                    <Link to="/signup">
                        Signup
                    </Link>

                    <button
                        onClick={handleLogout}
                        disabled={loading}
                        className="logout-btn"
                    >
                        {loading ? "Logging out..." : "Logout"}
                    </button>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;