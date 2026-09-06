import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Navbar(){
    const navigate = useNavigate();

    const handleLoginButton = () =>{
        navigate("/login")
    }
    const handleSignupButton = () =>{
        navigate("/signup")
    }
    return(
        <div className="w-full flex justify-between items-center px-4 min-h-15 bg-slate-600 shadow-xl">
            <div className="left">
            <Link className="mr-4 outline-2 py-2 px-4 rounded shadow-xl bg-gray-700 hover:bg-gray-800 outline-gray-400" to="/" >Home</Link>
            <Link className="mr-4 outline-2 py-2 px-4 rounded shadow-xl bg-purple-700 hover:bg-purple-800 outline-purple-400" to="/admin" >Admin</Link>
            <Link className="mr-4 outline-2 py-2 px-4 rounded shadow-xl bg-gray-700 hover:bg-gray-800 outline-gray-400" to="/contact" >Contact</Link>
            <Link className="mr-4 outline-2 py-2 px-4 rounded shadow-xl bg-gray-700 hover:bg-gray-800 outline-gray-400" to="/about" >About</Link>
            <Link className="mr-4 outline-2 py-2 px-4 rounded shadow-xl bg-gray-700 hover:bg-gray-800 outline-gray-400" to="/profile" >Profile</Link>
            </div>
            <div className="right">
            <button onClick={handleSignupButton} className="ml-4 cursor-pointer rounded outline-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 outline-blue-400">sugnup</button>
            <button onClick={handleLoginButton} className="ml-4 cursor-pointer rounded outline-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 outline-blue-400">login</button>
            </div>
        </div>
    )
}