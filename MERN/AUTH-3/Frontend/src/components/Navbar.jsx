import { Link } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/profile",
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );
                const data = await response.json();
                console.log(data);
                if (response.ok && data.success) {
                    setUser(data.user)
                }
            } catch (err) {
                console.log(err)
            }
        };
        checkAuth();
    }, [location.pathname])

    const handleLoginButton = () => {
        navigate("/login")
    }
    const handleSignupButton = () => {
        navigate("/signup")
    }
    const handleLogoutButton = async () => {
        try {
            const response = await fetch("http://localhost:3000/logout",
                {
                    method: "GET",
                    credentials: "include"
                }
            );
            const data = await response.json();
            console.log(data);
            if (response.ok && data.success) {
                setUser(null);
                navigate("/login")
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="w-full flex justify-between items-center px-4 min-h-15 bg-slate-600 shadow-xl">
            <div className="left">
                <Link className="mr-4 outline-2 py-2 px-4 rounded shadow-xl bg-gray-700 hover:bg-gray-800 outline-gray-400" to="/" >Home</Link>
                {
                    user?.role === "admin" && <Link className="mr-4 outline-2 py-2 px-4 rounded shadow-xl bg-purple-700 hover:bg-purple-800 outline-purple-400" to="/admin" >Admin</Link>
                }
                <Link className="mr-4 outline-2 py-2 px-4 rounded shadow-xl bg-gray-700 hover:bg-gray-800 outline-gray-400" to="/contact" >Contact</Link>
                <Link className="mr-4 outline-2 py-2 px-4 rounded shadow-xl bg-gray-700 hover:bg-gray-800 outline-gray-400" to="/about" >About</Link>
                {
                    user && <Link className="mr-4 outline-2 py-2 px-4 rounded shadow-xl bg-gray-700 hover:bg-gray-800 outline-gray-400" to="/profile" >Profile</Link>
                }
            </div>
            <div className="right flex items-center">

                {
                    user ?
                        <>
                            <p>👋welcome <b className="shadow-xl text-yellow-200">{user.name}</b></p>
                            <button onClick={handleLogoutButton} className="ml-4 cursor-pointer rounded outline-2 py-2 px-4 bg-red-600 hover:bg-red-700 outline-red-300">Logout</button>
                        </>
                        :
                        <>
                            <button onClick={handleSignupButton} className="ml-4 cursor-pointer rounded outline-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 outline-blue-400">sugnup</button>
                            <button onClick={handleLoginButton} className="ml-4 cursor-pointer rounded outline-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 outline-blue-400">login</button>
                        </>
                }
            </div>
        </div>
    )
}