import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

export default function Login() {
    const location = useLocation();
    const messages = location.state?.message;
    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Input change
    const handleInputChange = (event) => {
        setFormData((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value,
        }));
    };

    // Glitch animation
    useEffect(() => {
        if (!messages) return;

        const tl = gsap.timeline({ repeat: 2 });

        tl.to(".glitch-text", {
            x: -3,
            skewX: 10,
            duration: 0.05,
        })
            .to(".glitch-text", {
                x: 3,
                skewX: -8,
                duration: 0.05,
            })
            .to(".glitch-text", {
                x: 0,
                skewX: 0,
                duration: 0.05,
            });

        return () => {
            tl.kill();
        };
    }, [messages]);

    // Form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            console.log(data);

            if (response.ok && data.success) {
                setMessage(data.message);
                const redirectTo = location.state?.from?.pathname || "/profile";
                // Don't put user object inside formData
                setTimeout(() => {
                    navigate(redirectTo, { replace: true });
                }, 1000);
            } else {
                setMessage(data.message);
            }
        } catch (err) {
            console.log(err);
            setMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2 className="text-xl text-center py-3">
                Hello, welcome to Login page.
            </h2>

            <br />

            <form
                className="flex flex-col items-center gap-4 w-100 justify-center m-auto p-4 bg-slate-900 rounded shadow-xl h-100"
                onSubmit={handleFormSubmit}
            >
                {/* Redirect message */}
                {messages && (
                    <h3
                        className="text text-red-500 font-semibold glitch-text"
                        data-text={messages}
                    >
                       ⚠️{messages}
                    </h3>
                )}

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email..."
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-2 w-75 outline-2 bg-gray-700 outline-gray-400"
                    required
                />

                {/* Password */}
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password..."
                    value={formData.password}
                    onChange={handleInputChange}
                    className="p-2 w-75 outline-2 bg-gray-700 outline-gray-400"
                    required
                />

                {/* Login Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="p-2 outline-2 outline-blue-400 bg-blue-600 w-75 disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                {/* Login response */}
                {message && (
                    <p
                        className={
                            message.toLowerCase().includes("success")
                                ? "text-green-900"
                                : "text-red-900"
                        }
                    >
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}