import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const {
            name,
            email,
            password,
            confirmPassword,
        } = formData;

        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        if (password.length < 6) {
            setError("Password must contain at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Add your registration API here.

        console.log("Registration Data:", formData);

        navigate("/login");
    };

    return (
        <main className="Register">

            {/* Background decoration */}
            <div className="Register-bg-glow Register-bg-glow-one"></div>
            <div className="Register-bg-glow Register-bg-glow-two"></div>

            <div className="Register-wrapper">

                {/* ================= LEFT PANEL ================= */}

                <section className="Register-showcase">

                    <div className="Register-showcase-content">

                        <div className="Register-mini-badge">
                            <span>✦</span>
                            Weather App
                        </div>

                        <h1>
                            Create your
                            <span> weather journey.</span>
                        </h1>

                        <p>
                            Join our weather platform and enjoy a clean,
                            simple and modern way to explore weather
                            information around the world.
                        </p>

                        <div className="Register-feature-list">

                            <div className="Register-feature">
                                <div className="Register-feature-icon">
                                    🌤️
                                </div>

                                <div>
                                    <strong>
                                        Smart Weather Experience
                                    </strong>

                                    <span>
                                        Explore weather information with ease.
                                    </span>
                                </div>
                            </div>

                            <div className="Register-feature">
                                <div className="Register-feature-icon">
                                    📍
                                </div>

                                <div>
                                    <strong>
                                        Explore Locations
                                    </strong>

                                    <span>
                                        Search weather information for different
                                        locations.
                                    </span>
                                </div>
                            </div>

                            <div className="Register-feature">
                                <div className="Register-feature-icon">
                                    ⚡
                                </div>

                                <div>
                                    <strong>
                                        Fast & Simple
                                    </strong>

                                    <span>
                                        Get the information you need without
                                        unnecessary complexity.
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Weather visual */}

                    <div className="Register-weather-visual">

                        <div className="Register-orbit Register-orbit-one"></div>
                        <div className="Register-orbit Register-orbit-two"></div>

                        <div className="Register-weather-core">

                            <span>🌤️</span>

                            <strong>
                                Weather
                            </strong>

                            <small>
                                Explore the world
                            </small>

                        </div>

                        <div className="Register-floating-card Register-card-top">

                            <span>🌡️</span>

                            <div>
                                <small>Temperature</small>
                                <strong>24°C</strong>
                            </div>

                        </div>

                        <div className="Register-floating-card Register-card-bottom">

                            <span>💨</span>

                            <div>
                                <small>Wind Speed</small>
                                <strong>12 km/h</strong>
                            </div>

                        </div>

                    </div>

                </section>


                {/* ================= REGISTER FORM ================= */}

                <section className="Register-form-section">

                    <div className="Register-card">

                        <div className="Register-card-header">

                            <div className="Register-logo">
                                🌦️
                            </div>

                            <div>
                                <span className="Register-welcome">
                                    GET STARTED
                                </span>

                                <h2>
                                    Create Account
                                </h2>

                                <p>
                                    Create your account to continue.
                                </p>
                            </div>

                        </div>


                        {error && (
                            <div className="Register-error">
                                <span>!</span>
                                {error}
                            </div>
                        )}


                        <form
                            className="Register-form"
                            onSubmit={handleSubmit}
                        >

                            {/* Full Name */}

                            <div className="Register-field">

                                <label htmlFor="name">
                                    Full Name
                                </label>

                                <div className="Register-input-wrapper">

                                    <span className="Register-input-icon">
                                        👤
                                    </span>

                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="name"
                                    />

                                </div>

                            </div>


                            {/* Email */}

                            <div className="Register-field">

                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <div className="Register-input-wrapper">

                                    <span className="Register-input-icon">
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

                            <div className="Register-field">

                                <label htmlFor="password">
                                    Password
                                </label>

                                <div className="Register-input-wrapper">

                                    <span className="Register-input-icon">
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
                                        placeholder="Create a password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        autoComplete="new-password"
                                    />

                                    <button
                                        type="button"
                                        className="Register-password-toggle"
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


                            {/* Confirm Password */}

                            <div className="Register-field">

                                <label htmlFor="confirmPassword">
                                    Confirm Password
                                </label>

                                <div className="Register-input-wrapper">

                                    <span className="Register-input-icon">
                                        🔐
                                    </span>

                                    <input
                                        id="confirmPassword"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        value={
                                            formData.confirmPassword
                                        }
                                        onChange={handleChange}
                                        autoComplete="new-password"
                                    />

                                    <button
                                        type="button"
                                        className="Register-password-toggle"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                        aria-label={
                                            showConfirmPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showConfirmPassword
                                            ? "🙈"
                                            : "👁️"}
                                    </button>

                                </div>

                            </div>


                            {/* Terms */}

                            <label className="Register-terms">

                                <input
                                    type="checkbox"
                                    required
                                />

                                <span>
                                    I agree to the{" "}
                                    <Link to="/terms">
                                        Terms & Conditions
                                    </Link>
                                    {" "}and{" "}
                                    <Link to="/privacy">
                                        Privacy Policy
                                    </Link>
                                    .
                                </span>

                            </label>


                            {/* Submit */}

                            <button
                                type="submit"
                                className="Register-submit"
                            >
                                <span>
                                    Create Account
                                </span>

                                <b>
                                    →
                                </b>
                            </button>

                        </form>


                        {/* Login */}

                        <div className="Register-login">

                            <span>
                                Already have an account?
                            </span>

                            <Link to="/login">
                                Sign In
                            </Link>

                        </div>


                        <div className="Register-security">

                            <span>🔐</span>

                            <p>
                                Your information is handled securely.
                            </p>

                        </div>

                    </div>

                </section>

            </div>

        </main>
    );
}