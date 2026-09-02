
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        navigate("/login", { replace: true });
    };

    console.log(user);

    return (
        <div className="flex justify-between items-center bg-slate-900 py-2 px-4">

            {/* Left Navigation */}
            <div className="flex gap-4 text-lg font-semibold text-white">

                <Link
                    className="text-gray-400 hover:text-white"
                    to="/"
                >
                    🏠 Home
                </Link>

                {user?.role === "admin" && (
                    <Link
                        className="text-gray-400 hover:text-white"
                        to="/admin"
                    >
                        🤴 Admin
                    </Link>
                )}

                <Link
                    className="text-gray-400 hover:text-white"
                    to="/contact"
                >
                    📞 Contact
                </Link>

                <Link
                    className="text-gray-400 hover:text-white"
                    to="/about"
                >
                    🧑‍🏫 About
                </Link>

            </div>

            {/* Right Navigation */}
            <div className="flex items-center gap-4 text-lg font-semibold text-white">

                {user ? (
                    <div className="flex items-center">

                        <span>
                            👋 Welcome back{" "}
                            <b className="text-yellow-200">
                                {user.name}
                            </b>
                        </span>

                        <button
                            className="bg-red-600 hover:bg-red-700 ml-2 py-1 px-3 rounded cursor-pointer outline-2 outline-red-300"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </div>
                ) : (
                    <div className="flex items-center">

                        <Link
                            className="text-gray-300 hover:text-white"
                            to="/register"
                        >
                            Register
                        </Link>

                        <Link
                            className="outline-1 py-1 ml-2 px-4 rounded bg-blue-600 outline-blue-300 hover:bg-blue-800"
                            to="/login"
                        >
                            Login
                        </Link>

                    </div>
                )}

            </div>
        </div>
    );
}