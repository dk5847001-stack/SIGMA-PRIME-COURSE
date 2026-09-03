import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Lock, Mail, KeyRound, CheckCircle2, AlertTriangle, X, Loader2 } from "lucide-react";

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
        <div className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center justify-center px-4">

            {/* Ambient background */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[130px]" />
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-violet-600/10 rounded-full blur-[120px]" />

            <div className="relative w-full max-w-md">

                {/* Alert */}
                {message && (
                    <div
                        className={`mb-5 flex items-start gap-3 rounded-xl border backdrop-blur-sm px-4 py-3 shadow-lg animate-[slideDown_0.3s_ease-out]
                        ${
                            messageType === "success"
                                ? "bg-emerald-500/10 border-emerald-400/30 text-emerald-300"
                                : "bg-red-500/10 border-red-400/30 text-red-300"
                        }`}
                    >

                        {/* Icon */}
                        <div className="mt-0.5">
                            {messageType === "success" ? (
                                <CheckCircle2 size={18} strokeWidth={2} />
                            ) : (
                                <AlertTriangle size={18} strokeWidth={2} />
                            )}
                        </div>

                        {/* Message */}
                        <div className="flex-1">
                            <p className="font-semibold text-sm">
                                {messageType === "success"
                                    ? "Success"
                                    : "Login Required"}
                            </p>

                            <p className="text-sm mt-0.5 opacity-90">
                                {message}
                            </p>
                        </div>

                        {/* Close */}
                        <button
                            type="button"
                            onClick={() => setMessage("")}
                            className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-150"
                        >
                            <X size={16} strokeWidth={2.5} />
                        </button>
                    </div>
                )}

                {/* Login Card */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-[0_0_40px_-12px_rgba(34,211,238,0.15)] p-7">

                    <div className="flex flex-col items-center text-center mb-6">
                        <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-600/20 border border-white/10 mb-3">
                            <Lock size={24} strokeWidth={2} className="text-cyan-300" />
                        </span>

                        <h2 className="text-2xl font-bold text-white">
                            Welcome back
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
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-slate-400">
                                Email Address
                            </label>

                            <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-slate-950/60 px-3.5 py-2.5 focus-within:border-cyan-400/40 transition-colors duration-150">
                                <Mail size={16} strokeWidth={2} className="text-slate-500" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email..."
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-600 outline-none"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-slate-400">
                                Password
                            </label>

                            <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-slate-950/60 px-3.5 py-2.5 focus-within:border-cyan-400/40 transition-colors duration-150">
                                <KeyRound size={16} strokeWidth={2} className="text-slate-500" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password..."
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-600 outline-none"
                                />
                            </div>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-violet-600 hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-semibold py-2.5 rounded-lg shadow-[0_0_16px_-4px_rgba(34,211,238,0.5)] transition-[filter,transform] duration-150 mt-1"
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={16} strokeWidth={2.5} className="animate-spin" />
                                    Logging in...
                                </>
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