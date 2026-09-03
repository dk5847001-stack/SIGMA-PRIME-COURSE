import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus, User, Mail, KeyRound, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

export default function Register() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    let handleInputChange = (evnt) => {
        setFormData((previousData) => ({
            ...previousData,
            [evnt.target.name]: evnt.target.value
        }))
    };

    let handleFormSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("http://localhost:3000/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );
            const data = await response.json();
            console.log(data);
            if (data.success) {
                setMessage(data.message);
                localStorage.setItem("token", data.token);
                localStorage.setItem("user",
                    JSON.stringify(data.user)
                );
                setFormData({
                    name: "",
                    email: "",
                    password: ""
                });

                setTimeout(()=>{
                    navigate("/");
                }, 1000)
            }else{
                setMessage(data.message);
            }
        } catch (err) {
            console.log(err);
            setMessage("An error occurred while registering the user.");
        }
        finally {
            setLoading(false);
        }
    }

    const isSuccess = message.includes("success");

    return (
        <div className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center justify-center px-4 py-12">

            {/* Ambient background */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[130px] animate-[pulse_6s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-violet-600/10 rounded-full blur-[120px] animate-[pulse_7s_ease-in-out_infinite]" />

            <div className="relative w-full max-w-md animate-[riseIn_0.5s_ease-out]">

                {/* Register card */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(34,211,238,0.2)] p-7 transition-shadow duration-300 hover:shadow-[0_0_60px_-10px_rgba(34,211,238,0.28)]">

                    <div className="flex flex-col items-center text-center mb-6">
                        <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-600/20 border border-white/10 mb-3 transition-transform duration-300 hover:scale-105 hover:rotate-3">
                            <UserPlus size={24} strokeWidth={2} className="text-cyan-300" />
                        </span>

                        <h2 className="text-2xl font-bold text-white">
                            Create your account
                        </h2>

                        <p className="text-sm text-slate-500 mt-1">
                            Join in seconds — just a few details to get started
                        </p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">

                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-slate-400">
                                Full name
                            </label>
                            <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-slate-950/60 px-3.5 py-2.5 transition-all duration-200 focus-within:border-cyan-400/40 focus-within:bg-slate-950/80 focus-within:shadow-[0_0_0_3px_rgba(34,211,238,0.1)]">
                                <User size={16} strokeWidth={2} className="text-slate-500" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-600 outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-slate-400">
                                Email address
                            </label>
                            <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-slate-950/60 px-3.5 py-2.5 transition-all duration-200 focus-within:border-cyan-400/40 focus-within:bg-slate-950/80 focus-within:shadow-[0_0_0_3px_rgba(34,211,238,0.1)]">
                                <Mail size={16} strokeWidth={2} className="text-slate-500" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-600 outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-slate-400">
                                Password
                            </label>
                            <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-slate-950/60 px-3.5 py-2.5 transition-all duration-200 focus-within:border-cyan-400/40 focus-within:bg-slate-950/80 focus-within:shadow-[0_0_0_3px_rgba(34,211,238,0.1)]">
                                <KeyRound size={16} strokeWidth={2} className="text-slate-500" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-600 outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-violet-600 hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-semibold py-2.5 rounded-lg shadow-[0_0_16px_-4px_rgba(34,211,238,0.5)] transition-[filter,transform] duration-150 mt-1"
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={16} strokeWidth={2.5} className="animate-spin" />
                                    Creating account...
                                </>
                            ) : (
                                "Register"
                            )}
                        </button>

                        {/* Message */}
                        {message && (
                            <div
                                className={`flex items-center gap-2 justify-center text-sm rounded-lg py-2 px-3 border animate-[riseIn_0.25s_ease-out] ${
                                    isSuccess
                                        ? "bg-emerald-500/10 border-emerald-400/30 text-emerald-300"
                                        : "bg-red-500/10 border-red-400/30 text-red-300"
                                }`}
                            >
                                {isSuccess ? (
                                    <CheckCircle2 size={15} strokeWidth={2} />
                                ) : (
                                    <AlertTriangle size={15} strokeWidth={2} />
                                )}
                                {message}
                            </div>
                        )}
                    </form>
                </div>

                <p className="text-center text-xs text-slate-600 mt-5">
                    Already have an account? Head to the login page to sign in.
                </p>
            </div>

            {/* Custom animations */}
            <style>
                {`
                    @keyframes riseIn {
                        from {
                            opacity: 0;
                            transform: translateY(14px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>

        </div>
    )
}