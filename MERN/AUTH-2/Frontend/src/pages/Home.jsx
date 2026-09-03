import { useEffect } from "react"
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Phone, Info, ArrowRight } from "lucide-react";

export default function Home() {

    useEffect(() => {
        const fetchAuthMiddleware = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await fetch("http://localhost:3000/",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                const data = await response.json();
                console.log(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAuthMiddleware();
    }, [])

    const features = [
        {
            to: "/admin",
            icon: ShieldCheck,
            title: "Admin tools",
            desc: "Manage accounts and keep an eye on the system.",
        },
        {
            to: "/contact",
            icon: Phone,
            title: "Get in touch",
            desc: "Questions or feedback? Send us a message.",
        },
        {
            to: "/about",
            icon: Info,
            title: "About this app",
            desc: "Learn what we're building and why.",
        },
    ];

    return (
        <div className="relative min-h-screen bg-slate-950 overflow-hidden">

            {/* Ambient background */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[130px]" />
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-violet-600/10 rounded-full blur-[120px]" />

            <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-16">

                {/* Hero */}
                <div className="flex flex-col items-center text-center gap-5">
                    <div className="flex items-center gap-2 py-1.5 px-3.5 rounded-full border border-cyan-400/20 bg-cyan-400/5">
                        <Sparkles size={14} strokeWidth={2} className="text-cyan-400" />
                        <span className="text-xs font-medium tracking-wide text-cyan-300">
                            You're signed in
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent leading-tight">
                        Welcome to the home page
                    </h2>

                    <p className="text-slate-500 text-sm sm:text-base max-w-md">
                        Everything you need is one click away. Here's where to go next.
                    </p>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-14">
                    {features.map(({ to, icon: Icon, title, desc }) => (
                        <Link
                            key={to}
                            to={to}
                            className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-cyan-400/30 backdrop-blur-sm p-5 transition-colors duration-150"
                        >
                            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-600/20 border border-white/10">
                                <Icon size={20} strokeWidth={2} className="text-cyan-300" />
                            </span>

                            <div className="flex-1">
                                <h3 className="text-white font-semibold mb-1">{title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                            </div>

                            <span className="flex items-center gap-1 text-xs font-medium text-slate-500 group-hover:text-cyan-300 transition-colors duration-150">
                                Go there
                                <ArrowRight size={13} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                            </span>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}