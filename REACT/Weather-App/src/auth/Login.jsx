import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = formData;

        if (!email || !password) {
            setError("Please enter your email and password.");
            return;
        }

        if (password.length < 6) {
            setError("Password must contain at least 6 characters.");
            return;
        }

        // Add your login API here.

        console.log("Login Data:", formData);

        navigate("/weather");
    };

    return (
        <main className="Login">

            {/* Background Effects */}
            <div className="Login-bg-glow Login-bg-glow-one"></div>
            <div className="Login-bg-glow Login-bg-glow-two"></div>

            <div className="Login-wrapper">

                {/* =====================================
                    LEFT SHOWCASE
                ====================================== */}

                <section className="Login-showcase">

                    <div className="Login-showcase-content">

                        <div className="Login-mini-badge">
                            <span>✦</span>
                            Welcome Back
                        </div>

                        <h1>
                            Your weather.
                            <span> Your world.</span>
                        </h1>

                        <p>
                            Sign in to continue exploring a clean,
                            modern and convenient weather experience
                            built for everyday use.
                        </p>

                        <div className="Login-feature-list">

                            <div className="Login-feature">

                                <div className="Login-feature-icon">
                                    🌤️
                                </div>

                                <div>
                                    <strong>
                                        Weather Insights
                                    </strong>

                                    <span>
                                        Explore useful weather information
                                        in one place.
                                    </span>
                                </div>

                            </div>

                            <div className="Login-feature">

                                <div className="Login-feature-icon">
                                    📍
                                </div>

                                <div>
                                    <strong>
                                        Explore Locations
                                    </strong>

                                    <span>
                                        Search weather information for
                                        locations around the world.
                                    </span>
                                </div>

                            </div>

                            <div className="Login-feature">

                                <div className="Login-feature-icon">
                                    ⚡
                                </div>

                                <div>
                                    <strong>
                                        Simple Experience
                                    </strong>

                                    <span>
                                        Everything designed to be fast,
                                        clear and easy to use.
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Weather Illustration */}

                    <div className="Login-weather-visual">

                        <div className="Login-orbit Login-orbit-one"></div>
                        <div className="Login-orbit Login-orbit-two"></div>

                        <div className="Login-weather-core">

                            <span>🌦️</span>

                            <strong>
                                Weather
                            </strong>

                            <small>
                                Stay informed
                            </small>

                        </div>

                        <div className="Login-floating-card Login-card-top">

                            <span>🌡️</span>

                            <div>
                                <small>Temperature</small>
                                <strong>24°C</strong>
                            </div>

                        </div>

                        <div className="Login-floating-card Login-card-bottom">

                            <span>☁️</span>

                            <div>
                                <small>Conditions</small>
                                <strong>Partly Cloudy</strong>
                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================
                    LOGIN FORM
                ====================================== */}

                <section className="Login-form-section">

                    <div className="Login-card">

                        {/* Header */}

                        <div className="Login-card-header">

                            <div className="Login-logo">
                                🌦️
                            </div>

                            <div>

                                <span className="Login-welcome">
                                    ACCOUNT ACCESS
                                </span>

                                <h2>
                                    Welcome Back
                                </h2>

                                <p>
                                    Sign in to continue to your account.
                                </p>

                            </div>

                        </div>


                        {/* Error */}

                        {error && (
                            <div className="Login-error">

                                <span>!</span>

                                {error}

                            </div>
                        )}


                        {/* Form */}

                        <form
                            className="Login-form"
                            onSubmit={handleSubmit}
                        >

                            {/* Email */}

                            <div className="Login-field">

                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <div className="Login-input-wrapper">

                                    <span className="Login-input-icon">
                                        ✉️
                                    </span>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                    />

                                </div>

                            </div>


                            {/* Password */}

                            <div className="Login-field">

                                <div className="Login-label-row">

                                    <label htmlFor="password">
                                        Password
                                    </label>

                                    <Link to="/forgot-password">
                                        Forgot Password?
                                    </Link>

                                </div>

                                <div className="Login-input-wrapper">

                                    <span className="Login-input-icon">
                                        🔒
                                    </span>

                                    <input
                                        id="password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        autoComplete="current-password"
                                    />

                                    <button
                                        type="button"
                                        className="Login-password-toggle"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword ? "🙈" : "👁️"}
                                    </button>

                                </div>

                            </div>


                            {/* Remember */}

                            <label className="Login-remember">

                                <span className="Login-checkbox">

                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={formData.remember}
                                        onChange={handleChange}
                                    />

                                    <span className="Login-checkmark">
                                        ✓
                                    </span>

                                </span>

                                <span>
                                    Remember me
                                </span>

                            </label>


                            {/* Submit */}

                            <button
                                type="submit"
                                className="Login-submit"
                            >

                                <span>
                                    Sign In
                                </span>

                                <b>
                                    →
                                </b>

                            </button>

                        </form>


                        {/* Divider */}

                        <div className="Login-divider">

                            <span></span>

                            <p>
                                OR
                            </p>

                            <span></span>

                        </div>


                        {/* Signup */}

                        <div className="Login-signup">

                            <span>
                                Don't have an account?
                            </span>

                            <Link to="/signup">
                                Create Account
                            </Link>

                        </div>


                        {/* Security */}

                        <div className="Login-security">

                            <span>
                                🔐
                            </span>

                            <p>
                                Secure account access
                            </p>

                        </div>

                    </div>

                </section>

            </div>

        </main>
    );
}