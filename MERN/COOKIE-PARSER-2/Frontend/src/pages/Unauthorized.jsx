import { Link } from "react-router-dom";
import "./Unauthorized.css";

export default function Unauthorized() {
    return (
        <div className="unauthorized-page">

            <div className="unauthorized-card">

                <div className="unauthorized-icon">
                    🔒
                </div>

                <div className="error-code">
                    403
                </div>

                <h1>
                    Access Denied
                </h1>

                <p>
                    Sorry, you don't have permission to access this page.
                </p>

                <div className="unauthorized-buttons">

                    <Link
                        to="/profile"
                        className="profile-btn"
                    >
                        Go to Profile
                    </Link>

                    <Link
                        to="/"
                        className="home-btn"
                    >
                        Go to Home
                    </Link>

                </div>

                <span className="error-info">
                    Error Code: 403 • Unauthorized Access
                </span>

            </div>

        </div>
    );
}