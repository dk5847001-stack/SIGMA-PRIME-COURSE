import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Login() {

    const navigate = useNavigate();
    const location = useLocation()
    const message = location.state?.message;
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (event) => {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        setError("");

        try {

            setLoading(true);

            const response = await fetch(
                "http://localhost:3000/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {

                if (data.errors) {
                    setError(data.errors.join(", "));
                } else {
                    setError(
                        data.message || "Login failed!"
                    );
                }

                return;
            }

            // Cookie browser automatically store karega
            navigate("/profile");

        } catch (error) {

            console.error(error);

            setError(
                "Unable to connect with server!"
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="auth-page">

            <div className="auth-card">

                <div className="auth-header">

                    <div className="auth-icon">
                        🔐
                    </div>

                    <h1>Welcome Back</h1>

                    <p>
                        Login to your InternovaTech account
                    </p>

                </div>

                {message && (
                    <p className="error-message">
                       ❌ {message}
                    </p>
                )}

                {error && (
                    <div className="error-message">
                        ❌ {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <label>
                            Gmail Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="input-group">

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="auth-btn"
                        disabled={loading}
                    >

                        {loading
                            ? "Logging in..."
                            : "Login"
                        }

                    </button>

                </form>

                <div className="auth-footer">

                    <p>
                        Don't have an account?
                    </p>

                    <button
                        onClick={() => navigate("/signup")}
                        className="link-btn"
                    >
                        Create Account
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Login;