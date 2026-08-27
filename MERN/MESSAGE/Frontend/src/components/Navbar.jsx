import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="flex gap-40 text-center justify-center py-1 w-full h-16 items-center bg-cyan-950 border-bottom-1">
            <Link className="border-1 py-2 px-6 bg-blue-700 border-blue-400 rounded hover:cursor-pointer hover:bg-blue-800 font-semibold" to="#">MESSAGE APP</Link>
            <Link className="border-1 py-2 px-6 bg-blue-700 border-blue-400 rounded hover:cursor-pointer hover:bg-blue-800 font-semibold" to="/">Home</Link>
            <Link className="border-1 py-2 px-6 bg-blue-700 border-blue-400 rounded hover:cursor-pointer hover:bg-blue-800 font-semibold" to="/admin">Admin</Link>
        </div>
    )
}