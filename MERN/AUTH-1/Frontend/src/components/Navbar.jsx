import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {

        // Remove authentication data
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // Redirect to login page
        navigate("/login");
    };

    return (
        <nav className="flex justify-between items-center min-h-10 bg-slate-600 py-4 px-4">

            {/* ---------------- LEFT SIDE ---------------- */}
            <div className="left flex items-center">

                {/* Brand */}
                <Link
                    to="/"
                    className="mx-2 text-center outline-2 py-2 px-6 rounded bg-blue-600 hover:bg-blue-700 outline-blue-400 text-white"
                >
                    Auth App
                </Link>

                {/* Home */}
                <Link
                    to="/"
                    className="mx-2 text-center outline-2 py-2 px-6 rounded bg-blue-600 hover:bg-blue-700 outline-blue-400 text-white"
                >
                    Home
                </Link>

                {/* Admin - Only Admin */}
                {user?.role === "admin" && (
                    <Link
                        to="/admin"
                        className="mx-2 text-center outline-2 py-2 px-6 rounded bg-purple-600 hover:bg-purple-700 outline-purple-400 text-white"
                    >
                        Admin
                    </Link>
                )}

                {/* About */}
                <Link
                    to="/about"
                    className="mx-2 text-center outline-2 py-2 px-6 rounded bg-blue-600 hover:bg-blue-700 outline-blue-400 text-white"
                >
                    About
                </Link>

            </div>


            {/* ---------------- RIGHT SIDE ---------------- */}
            <div className="right flex items-center text-center">

                {/* Logged-in User */}
                {user && (
                    <p className="text-xl text-white">
                        Hii 🤴,{" "}
                        <b className="text-yellow-200 mr-3 shadow-xl">
                            {user.name}
                        </b>
                    </p>
                )}


                {/* Signup - Only Guest */}
                {!user && (
                    <Link
                        to="/signup"
                        className="mx-2 text-center outline-2 py-2 px-6 rounded bg-green-700 hover:bg-green-900 outline-green-400 text-white"
                    >
                        Signup
                    </Link>
                )}


                {/* Login / Logout */}
                {user ? (

                    <button
                        onClick={handleLogout}
                        className="mx-2 text-center outline-2 py-2 px-6 rounded bg-red-700 hover:bg-red-900 outline-red-400 text-white cursor-pointer"
                    >
                        Logout
                    </button>

                ) : (

                    <Link
                        to="/login"
                        className="mx-2 text-center outline-2 py-2 px-6 rounded bg-green-700 hover:bg-green-900 outline-green-400 text-white"
                    >
                        Login
                    </Link>

                )}

            </div>

        </nav>
    );
}