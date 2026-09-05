import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (event) => {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        setError("");
        setSuccess("");

        try {

            setLoading(true);

            const response = await fetch(
                "http://localhost:3000/signup",
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
                    setError(data.message || "Signup failed!");
                }

                return;
            }

            setSuccess(data.message);

            // OTP page par email bhejna
            navigate("/verify-otp", {
                state: {
                    email: data.email
                }
            });

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
                        🚀
                    </div>

                    <h1>Create Account</h1>

                    <p>
                        Create your InternovaTech account
                    </p>

                </div>

                {error && (
                    <div className="error-message">
                        ❌ {error}
                    </div>
                )}

                {success && (
                    <div className="success-message">
                        ✅ {success}
                    </div>
                )}

                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <label>
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                    </div>

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
                            placeholder="Minimum 6 characters"
                            value={formData.password}
                            onChange={handleChange}
                            minLength={6}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="auth-btn"
                        disabled={loading}
                    >

                        {loading
                            ? "Sending OTP..."
                            : "Create Account"
                        }

                    </button>

                </form>

                <div className="auth-footer">

                    <p>
                        Already have an account?
                    </p>

                    <button
                        onClick={() => navigate("/login")}
                        className="link-btn"
                    >
                        Login here
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Signup;