import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const closeMenu = () => setMenuOpen(false);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="Navbar">
            <div className="Navbar-container">

                {/* Logo / Brand */}
                <Link to="/" className="Navbar-brand" onClick={closeMenu}>
                    <div className="Brand-icon">
                        ☁️
                    </div>

                    <div className="Brand-text">
                        <span>Weather</span>
                        <strong>App</strong>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className={`Nav-menu ${menuOpen ? "active" : ""}`}>

                    <div className="Nav-links">
                        <Link
                            to="/"
                            className={isActive("/") ? "nav-active" : ""}
                            onClick={closeMenu}
                        >
                            <span>⌂</span>
                            Home
                        </Link>

                        <Link
                            to="/weather"
                            className={isActive("/weather") ? "nav-active" : ""}
                            onClick={closeMenu}
                        >
                            <span>🌤️</span>
                            Weather
                        </Link>

                        <Link
                            to="/about"
                            className={isActive("/about") ? "nav-active" : ""}
                            onClick={closeMenu}
                        >
                            <span>ⓘ</span>
                            About Us
                        </Link>

                        <Link
                            to="/service"
                            className={isActive("/service") ? "nav-active" : ""}
                            onClick={closeMenu}
                        >
                            <span>⚡</span>
                            Service
                        </Link>

                        <Link
                            to="/contact"
                            className={isActive("/contact") ? "nav-active" : ""}
                            onClick={closeMenu}
                        >
                            <span>✉</span>
                            Contact Us
                        </Link>
                    </div>

                    {/* Authentication */}
                    <div className="Nav-auth">
                        <Link
                            to="/login"
                            className="Login-btn"
                            onClick={closeMenu}
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="Signup-btn"
                            onClick={closeMenu}
                        >
                            Sign Up
                            <span>→</span>
                        </Link>
                    </div>

                </div>

                {/* Hamburger */}
                <button
                    className={`Hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
        </nav>
    );
}