import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, ShieldCheck, Phone, Info, LogOut, LogIn, UserPlus } from "lucide-react";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        navigate("/login", { replace: true });
    };

    console.log(user);

    const navLinks = [
        { to: "/", label: "Home", icon: Home },
        ...(user?.role === "admin"
            ? [{ to: "/admin", label: "Admin", icon: ShieldCheck }]
            : []),
        { to: "/contact", label: "Contact", icon: Phone },
        { to: "/about", label: "About", icon: Info },
    ];

    const initial = user?.name?.charAt(0)?.toUpperCase();

    return (
        <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
            <div className="flex justify-between items-center py-3 px-6 max-w-7xl mx-auto">

                {/* Left Navigation */}
                <nav className="flex items-center gap-1 text-sm font-medium">
                    {navLinks.map(({ to, label, icon: Icon }) => {
                        const active = location.pathname === to;
                        return (
                            <Link
                                key={to}
                                to={to}
                                className={`group relative flex items-center gap-1.5 py-2 px-3 rounded-md transition-colors duration-150 ${
                                    active
                                        ? "text-white"
                                        : "text-slate-400 hover:text-slate-100"
                                }`}
                            >
                                <Icon
                                    size={16}
                                    strokeWidth={2}
                                    className={`transition-colors duration-150 ${
                                        active ? "text-cyan-400" : "text-slate-500 group-hover:text-slate-300"
                                    }`}
                                />
                                {label}
                                <span
                                    className={`absolute left-3 right-3 -bottom-[13px] h-px transition-opacity duration-150 ${
                                        active ? "bg-cyan-400 opacity-100" : "opacity-0"
                                    }`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Navigation */}
                <div className="flex items-center gap-3 text-sm font-medium">

                    {user ? (
                        <div className="flex items-center gap-3">

                            <div className="flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-full border border-white/10 bg-white/5">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 text-[11px] font-semibold text-slate-950">
                                    {initial}
                                </span>
                                <span className="text-slate-300">
                                    {user.name}
                                </span>
                            </div>

                            <button
                                className="flex items-center gap-1.5 border border-white/10 hover:border-red-400/40 hover:bg-red-500/10 text-slate-400 hover:text-red-300 py-1.5 px-3 rounded-md cursor-pointer transition-colors duration-150"
                                onClick={handleLogout}
                            >
                                <LogOut size={14} strokeWidth={2} />
                                Logout
                            </button>

                        </div>
                    ) : (
                        <div className="flex items-center gap-2">

                            <Link
                                className="flex items-center gap-1.5 text-slate-400 hover:text-slate-100 py-1.5 px-3 rounded-md transition-colors duration-150"
                                to="/register"
                            >
                                <UserPlus size={15} strokeWidth={2} />
                                Register
                            </Link>

                            <Link
                                className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-400 to-violet-600 hover:brightness-110 text-slate-950 py-1.5 px-4 rounded-md shadow-[0_0_16px_-4px_rgba(34,211,238,0.5)] transition-[filter] duration-150"
                                to="/login"
                            >
                                <LogIn size={15} strokeWidth={2.5} />
                                Login
                            </Link>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}