import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Navbar() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/profile",
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );
                const data = await response.json();
                console.log(data);
                if (response.ok && data.success) {
                    setUser(data.user);
                } else {
                    setUser(null)
                }
            } catch (err) {
                console.error("Authentication check faild:", err);
                setUser(null);
            }
        };
        checkAuth();
    }, []);

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

                    {
                        user ?
                         <>
                         <span style={{color: "pink"}}>👋welcome {user.name}</span>
                         <button
                            onClick={handleLogout}
                            disabled={loading}
                            className="logout-btn"
                        >
                            {loading ? "Logging out..." : "Logout"}
                        </button></>
                        :
                        <><Link to="/login">Login</Link><Link to="/signup">Signup</Link></>
                    }



                </div>

            </div>

        </nav>
    );
}

export default Navbar;