
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("error");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // Show message received from ProtectedRoute
    useEffect(() => {
        if (location.state?.message) {
            setMessage(location.state.message);
            setMessageType("error");

            // Remove router state after reading it
            navigate(location.pathname, {
                replace: true,
                state: {}
            });
        }
    }, [location, navigate]);

    // Auto hide alert
    useEffect(() => {
        if (!message) return;

        const timer = setTimeout(() => {
            setMessage("");
        }, 4000);

        return () => clearTimeout(timer);
    }, [message]);

    const handleInputChange = (event) => {
        setFormData((previousData) => ({
            ...previousData,
            [event.target.name]: event.target.value
        }));
    };

    const showMessage = (text, type = "error") => {
        setMessage(text);
        setMessageType(type);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!formData.email || !formData.password) {
            showMessage("Please enter email and password!");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            console.log(data);

            if (data.success) {
                localStorage.setItem("token", data.token);
                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );

                showMessage(
                    data.message || "Login successful!",
                    "success"
                );

                setFormData({
                    email: "",
                    password: ""
                });

                // Redirect after short delay
                setTimeout(() => {
                    navigate("/", { replace: true });
                }, 1000);

            } else {
                showMessage(
                    data.message || "Invalid email or password!",
                    "error"
                );
            }

        } catch (error) {
            console.log(error);

            showMessage(
                "Unable to connect to server. Please try again later!",
                "error"
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen text-black bg-slate-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                {/* Alert */}
                {message && (
                    <div
                        className={`mb-5 flex items-start gap-3 rounded-xl border px-4 py-3 shadow-lg animate-[slideDown_0.3s_ease-out]
                        ${
                            messageType === "success"
                                ? "bg-green-50 border-green-200 text-green-700"
                                : "bg-red-50 border-red-200 text-red-700"
                        }`}
                    >

                        {/* Icon */}
                        <div className="text-xl">
                            {messageType === "success" ? "✅" : "⚠️"}
                        </div>

                        {/* Message */}
                        <div className="flex-1">
                            <p className="font-semibold">
                                {messageType === "success"
                                    ? "Success"
                                    : "Login Required"}
                            </p>

                            <p className="text-sm mt-0.5">
                                {message}
                            </p>
                        </div>

                        {/* Close */}
                        <button
                            type="button"
                            onClick={() => setMessage("")}
                            className="text-lg font-bold opacity-60 hover:opacity-100 cursor-pointer"
                        >
                            ×
                        </button>
                    </div>
                )}

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-7">

                    <div className="text-center mb-6">
                        <div className="text-4xl mb-2">
                            🔐
                        </div>

                        <h2 className="text-2xl font-bold text-slate-800">
                            Welcome Back
                        </h2>

                        <p className="text-sm text-slate-500 mt-1">
                            Login to continue to your account
                        </p>
                    </div>

                    <form
                        onSubmit={handleFormSubmit}
                        className="flex flex-col gap-4"
                    >

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Email Address
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email..."
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border border-slate-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password..."
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full border border-slate-300 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    Logging in...
                                </span>
                            ) : (
                                "Login"
                            )}
                        </button>

                    </form>
                </div>
            </div>

            {/* Custom Animation */}
            <style>
                {`
                    @keyframes slideDown {
                        from {
                            opacity: 0;
                            transform: translateY(-10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>

        </div>
    );
}