import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <div className="flex justify-center gap-16 h-15 items-center bg-slate-700">
            <button className="outline-1 py-2 px-6 rounded bg-yellow-800 hover:outline-2 shadow-xl/30 outline-yellow-400" disabled>Subscriber Portel</button>
            <Link className="outline-1 py-2 px-6 rounded bg-blue-700 hover:bg-blue-800 hover:outline-2 shadow-xl/30 outline-blue-400" to="/">Home</Link>
            <Link className="outline-1 py-2 px-6 rounded bg-blue-700 hover:bg-blue-800 hover:outline-2 shadow-xl/30 outline-blue-400" to="/admin">Admin Portel</Link>
        </div>
    )
} 