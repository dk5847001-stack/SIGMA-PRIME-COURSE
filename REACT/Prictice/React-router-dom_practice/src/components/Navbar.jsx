import { Link } from "react-router-dom"
import "./Navbar.css"
export default function Navbar(){
    return(
        <div className="Navbar">

            

            <div className="Left">
                <div className="logo">
                <h2>Logo</h2>
            </div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/service">Service</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </ul>
            </div>
            {/* -------------------------------------------------------- */}
            <div className="Right">
                <ul>
            <Link to="/signup">Sing up</Link>
            <Link to="/login">Login</Link>
            </ul>
            </div>
            {/* -------------------------------------------------------- */}
        </div>
    )
}