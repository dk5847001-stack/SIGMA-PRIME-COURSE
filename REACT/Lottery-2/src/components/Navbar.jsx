import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar(){
    return(
        <div className="Navbar">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/lottery">Lottery</Link>
                <Link to="/about">About</Link>
                <Link to="/signup">Sign up</Link>
                <Link to="/login">Login</Link>
            </ul>
        </div>
    )
}