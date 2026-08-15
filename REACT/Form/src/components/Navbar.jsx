import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="Navbar">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/register">Register</Link>
            </ul>
        </div>
    )
}