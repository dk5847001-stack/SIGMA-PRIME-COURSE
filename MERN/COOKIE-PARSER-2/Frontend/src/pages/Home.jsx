import { Link } from "react-router-dom";

function Home() {

    return (
        <div className="page-container">

            <section className="hero">

                <div className="hero-content">

                    <span className="badge">
                        MERN Authentication System
                    </span>

                    <h1>
                        Welcome to <span>InternovaTech</span>
                    </h1>

                    <p>
                        Secure authentication system with Gmail OTP,
                        JWT, HTTP-only cookies and role-based access.
                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/signup"
                            className="primary-btn"
                        >
                            Create Account
                        </Link>

                        <Link
                            to="/login"
                            className="secondary-btn"
                        >
                            Login
                        </Link>

                    </div>

                </div>

            </section>

            <section className="features">

                <div className="feature-card">
                    <div className="feature-icon">🔐</div>
                    <h3>Secure Authentication</h3>
                    <p>
                        JWT based authentication with HTTP-only cookies.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">📧</div>
                    <h3>Gmail OTP</h3>
                    <p>
                        Verify your Gmail address using a 6-digit OTP.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🛡️</div>
                    <h3>Admin Protection</h3>
                    <p>
                        Role-based access protects admin resources.
                    </p>
                </div>

            </section>

        </div>
    );
}

export default Home;