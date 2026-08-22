import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="Footer">

            {/* Top Glow */}
            <div className="Footer-glow"></div>

            <div className="Footer-container">

                {/* ================= BRAND SECTION ================= */}
                <div className="Footer-brand-section">

                    <Link to="/" className="Footer-brand">
                        <div className="Footer-brand-icon">
                            ☁️
                        </div>

                        <div className="Footer-brand-text">
                            <span>Weather</span>
                            <strong>App</strong>
                        </div>
                    </Link>

                    <p className="Footer-description">
                        Your smart weather companion for accurate,
                        simple and reliable weather information —
                        anytime, anywhere.
                    </p>

                    {/* Social Links */}
                    <div className="Footer-socials">

                        <a href="#" aria-label="Facebook">
                            f
                        </a>

                        <a href="#" aria-label="Instagram">
                            ◎
                        </a>

                        <a href="#" aria-label="Twitter">
                            𝕏
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            in
                        </a>

                        <a href="#" aria-label="GitHub">
                            ◉
                        </a>

                    </div>

                </div>


                {/* ================= QUICK LINKS ================= */}
                <div className="Footer-column">

                    <h3>Quick Links</h3>

                    <ul>
                        <li>
                            <Link to="/">
                                <span>→</span> Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/weather">
                                <span>→</span> Weather
                            </Link>
                        </li>

                        <li>
                            <Link to="/about">
                                <span>→</span> About Us
                            </Link>
                        </li>

                        <li>
                            <Link to="/service">
                                <span>→</span> Services
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact">
                                <span>→</span> Contact Us
                            </Link>
                        </li>
                    </ul>

                </div>


                {/* ================= SERVICES ================= */}
                <div className="Footer-column">

                    <h3>Services</h3>

                    <ul>
                        <li>
                            <Link to="/weather">
                                <span>→</span> Live Weather
                            </Link>
                        </li>

                        <li>
                            <Link to="/weather">
                                <span>→</span> Weather Search
                            </Link>
                        </li>

                        <li>
                            <Link to="/weather">
                                <span>→</span> Temperature
                            </Link>
                        </li>

                        <li>
                            <Link to="/weather">
                                <span>→</span> Weather Forecast
                            </Link>
                        </li>

                        <li>
                            <Link to="/service">
                                <span>→</span> All Services
                            </Link>
                        </li>
                    </ul>

                </div>


                {/* ================= SUPPORT ================= */}
                <div className="Footer-column">

                    <h3>Support</h3>

                    <ul>
                        <li>
                            <Link to="/contact">
                                <span>→</span> Help Center
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact">
                                <span>→</span> Contact Support
                            </Link>
                        </li>

                        <li>
                            <Link to="/about">
                                <span>→</span> About Platform
                            </Link>
                        </li>

                        <li>
                            <a href="#">
                                <span>→</span> Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <span>→</span> Terms & Conditions
                            </a>
                        </li>
                    </ul>

                </div>

            </div>


            {/* ================= NEWSLETTER ================= */}
            <div className="Footer-newsletter-wrapper">

                <div className="Footer-newsletter">

                    <div className="Newsletter-content">

                        <div className="Newsletter-icon">
                            ✨
                        </div>

                        <div>
                            <h3>Stay Weather Ready</h3>

                            <p>
                                Get useful weather updates and
                                important information.
                            </p>
                        </div>

                    </div>

                    <div className="Newsletter-form">

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            aria-label="Email address"
                        />

                        <button type="button">
                            Subscribe
                            <span>→</span>
                        </button>

                    </div>

                </div>

            </div>


            {/* ================= BOTTOM BAR ================= */}
            <div className="Footer-bottom">

                <div className="Footer-bottom-container">

                    <p>
                        © {currentYear} Weather App. All rights reserved.
                    </p>

                    <div className="Footer-bottom-links">

                        <Link to="/about">
                            About
                        </Link>

                        <span></span>

                        <a href="#">
                            Privacy
                        </a>

                        <span></span>

                        <a href="#">
                            Terms
                        </a>

                    </div>

                    <p className="Made-with">
                        Made with <b>♥</b> for better weather
                    </p>

                </div>

            </div>

        </footer>
    );
}