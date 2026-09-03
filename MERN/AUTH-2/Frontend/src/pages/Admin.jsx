import { useEffect } from "react"
import { ShieldCheck, Radar } from "lucide-react";
import Users from "../components/Users";

export default function Admin() {

    useEffect(() => {
        const fetchAdminMiddleware = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await fetch("http://localhost:3000/admin",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                    }
                );
                const data = await response.json();
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAdminMiddleware();
    }, [])

    return (
        <div className="relative min-h-screen bg-slate-950 overflow-hidden">

            {/* Ambient background */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(34,211,238,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.6) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-cyan-500/10 rounded-full blur-[120px]" />
            <div className="absolute top-40 right-0 w-[420px] h-[420px] bg-violet-600/10 rounded-full blur-[120px]" />

            <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-4 mb-14">
                    <div className="flex items-center gap-2 py-1.5 px-3.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
                        <Radar size={14} strokeWidth={2} className="text-cyan-400 animate-[spin_4s_linear_infinite]" />
                        <span className="text-xs font-medium tracking-wide text-cyan-300">
                            Control Panel
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-600/20 border border-white/10">
                            <ShieldCheck size={26} strokeWidth={2} className="text-cyan-300" />
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                            Welcome to the Admin page
                        </h2>
                    </div>

                    <p className="text-slate-500 text-sm max-w-md">
                        Manage accounts, review activity, and keep the system running smoothly.
                    </p>
                </div>

                {/* Users panel */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-[0_0_40px_-12px_rgba(34,211,238,0.15)] p-6 md:p-8">
                    <Users />
                </div>

            </div>
        </div>
    )
}
