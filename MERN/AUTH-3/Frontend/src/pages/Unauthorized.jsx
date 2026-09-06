import { useNavigate } from "react-router-dom";

function Unauthorized() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-12 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

            {/* Card */}
            <div className="relative w-full max-w-lg">

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-2xl shadow-black/40 px-8 py-12 sm:px-12 text-center">

                    {/* Top Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

                    {/* Lock Icon */}
                    <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] shadow-lg">
                        <svg
                            className="h-9 w-9 text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 10V7a4 4 0 00-8 0v3"
                            />
                            <rect
                                width="14"
                                height="11"
                                x="5"
                                y="10"
                                rx="2"
                            />
                            <path
                                strokeLinecap="round"
                                d="M12 14v3"
                            />
                        </svg>
                    </div>

                    {/* Error Code */}
                    <p className="text-7xl sm:text-8xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                        403
                    </p>

                    {/* Heading */}
                    <h1 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight">
                        Access Denied
                    </h1>

                    {/* Description */}
                    <p className="mt-4 mx-auto max-w-md text-sm sm:text-base leading-7 text-slate-400">
                        You don't have permission to access this page.
                        Please make sure you're logged in with an
                        authorized account.
                    </p>

                    {/* Status */}
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm text-red-300">
                        <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.8)]" />
                        Unauthorized Access
                    </div>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">

                        {/* Go Home */}
                        <button
                            onClick={() => navigate("/")}
                            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:bg-white/[0.12] hover:border-white/20 hover:-translate-y-0.5"
                        >
                            <svg
                                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>

                            Go Home
                        </button>

                        {/* Login */}
                        <button
                            onClick={() => navigate("/login")}
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/30 hover:-translate-y-0.5"
                        >
                            Login

                            <svg
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>

                    </div>

                    {/* Footer */}
                    <div className="mt-9 pt-6 border-t border-white/10">
                        <p className="text-xs text-slate-500">
                            Error Code: 403 • Protected Area
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Unauthorized;
