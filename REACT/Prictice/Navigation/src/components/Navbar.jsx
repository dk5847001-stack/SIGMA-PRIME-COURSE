import "../css/style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-glass">
        <div className="logo">
          <Link to="/">
            <img src="/src/assets/logo.png" alt="Logo" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/home">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </Link>

          <Link to="/service">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            <span>Services</span>
          </Link>

          <Link to="/contact">
            <i className="fa-solid fa-phone"></i>
            <span>Contact</span>
          </Link>

          <Link to="/about">
            <i className="fa-solid fa-circle-info"></i>
            <span>About</span>
          </Link>
        </div>

        <div className="auth-buttons">
          <Link className="register-btn" to="/register">
            Register
          </Link>

          <Link className="login-btn" to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}