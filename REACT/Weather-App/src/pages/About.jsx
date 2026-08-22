import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
    return (
        <main className="About">

            {/* ================= HERO ================= */}
            <section className="About-hero">

                <div className="About-hero-glow About-glow-one"></div>
                <div className="About-hero-glow About-glow-two"></div>

                <div className="About-hero-content">

                    <div className="About-badge">
                        <span>✦</span>
                        About Weather App
                    </div>

                    <h1>
                        Weather made
                        <span> simple & smarter.</span>
                    </h1>

                    <p>
                        Weather App is designed to make weather information
                        simple, accessible and easy to understand. Explore
                        current conditions, temperature and useful weather
                        insights through a clean modern experience.
                    </p>

                    <div className="About-hero-buttons">

                        <Link to="/weather" className="About-primary-btn">
                            Explore Weather
                            <span>→</span>
                        </Link>

                        <Link to="/contact" className="About-secondary-btn">
                            Contact Us
                        </Link>

                    </div>

                </div>

                <div className="About-hero-visual">

                    <div className="About-orbit orbit-one"></div>
                    <div className="About-orbit orbit-two"></div>

                    <div className="About-sun">
                        ☀️
                    </div>

                    <div className="About-floating-card card-temperature">
                        <span>🌡️</span>
                        <div>
                            <small>Temperature</small>
                            <strong>24°C</strong>
                        </div>
                    </div>

                    <div className="About-floating-card card-wind">
                        <span>💨</span>
                        <div>
                            <small>Wind Speed</small>
                            <strong>12 km/h</strong>
                        </div>
                    </div>

                    <div className="About-floating-card card-humidity">
                        <span>💧</span>
                        <div>
                            <small>Humidity</small>
                            <strong>65%</strong>
                        </div>
                    </div>

                </div>

            </section>


            {/* ================= INTRO ================= */}
            <section className="About-intro">

                <div className="About-section-heading">

                    <span>OUR PURPOSE</span>

                    <h2>
                        Understanding the weather
                        <strong> should feel effortless.</strong>
                    </h2>

                </div>

                <div className="About-intro-content">

                    <p>
                        Weather affects almost every part of our daily life.
                        From planning a journey to deciding what to wear,
                        knowing the weather helps us make better decisions.
                    </p>

                    <p>
                        Our goal is to create a clean and intuitive platform
                        where users can quickly discover useful weather
                        information without unnecessary complexity.
                    </p>

                </div>

            </section>


            {/* ================= MISSION ================= */}
            <section className="About-mission">

                <div className="Mission-visual">

                    <div className="Mission-circle circle-one"></div>
                    <div className="Mission-circle circle-two"></div>

                    <div className="Mission-center">
                        <span>🌍</span>
                        <strong>Weather</strong>
                        <small>For Everyone</small>
                    </div>

                </div>

                <div className="Mission-content">

                    <span className="Section-label">
                        OUR MISSION
                    </span>

                    <h2>
                        Making weather
                        <span> easier to understand.</span>
                    </h2>

                    <p>
                        We believe weather information should be clear,
                        fast and accessible. Weather App focuses on creating
                        a simple experience that puts the information users
                        need right where they need it.
                    </p>

                    <div className="Mission-points">

                        <div>
                            <span>✓</span>
                            <p>
                                <strong>Simple Experience</strong>
                                Easy-to-understand weather information.
                            </p>
                        </div>

                        <div>
                            <span>✓</span>
                            <p>
                                <strong>Useful Information</strong>
                                Focused on weather details that matter.
                            </p>
                        </div>

                        <div>
                            <span>✓</span>
                            <p>
                                <strong>Modern Interface</strong>
                                Designed for a smooth digital experience.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= FEATURES ================= */}
            <section className="About-features">

                <div className="About-section-heading center">

                    <span>WHAT WE OFFER</span>

                    <h2>
                        Built around your
                        <strong> everyday needs.</strong>
                    </h2>

                    <p>
                        Everything is designed to keep weather information
                        useful, accessible and easy to explore.
                    </p>

                </div>

                <div className="About-feature-grid">

                    <div className="About-feature-card">

                        <div className="About-feature-icon">
                            🌤️
                        </div>

                        <h3>Current Conditions</h3>

                        <p>
                            Quickly explore the current weather conditions
                            for your selected location.
                        </p>

                        <span className="Feature-number">
                            01
                        </span>

                    </div>


                    <div className="About-feature-card">

                        <div className="About-feature-icon">
                            📍
                        </div>

                        <h3>Location Search</h3>

                        <p>
                            Find weather information for places that matter
                            to you with a simple search experience.
                        </p>

                        <span className="Feature-number">
                            02
                        </span>

                    </div>


                    <div className="About-feature-card">

                        <div className="About-feature-icon">
                            ⚡
                        </div>

                        <h3>Fast Experience</h3>

                        <p>
                            Designed with simplicity and performance in mind
                            for a smooth browsing experience.
                        </p>

                        <span className="Feature-number">
                            03
                        </span>

                    </div>


                    <div className="About-feature-card">

                        <div className="About-feature-icon">
                            📱
                        </div>

                        <h3>Responsive Design</h3>

                        <p>
                            Enjoy a consistent experience across desktop,
                            tablet and mobile devices.
                        </p>

                        <span className="Feature-number">
                            04
                        </span>

                    </div>

                </div>

            </section>


            {/* ================= STATS ================= */}
            <section className="About-stats">

                <div className="About-stat">

                    <strong>24/7</strong>

                    <span>Weather Access</span>

                </div>

                <div className="About-stat-divider"></div>

                <div className="About-stat">

                    <strong>100%</strong>

                    <span>User Focused</span>

                </div>

                <div className="About-stat-divider"></div>

                <div className="About-stat">

                    <strong>Fast</strong>

                    <span>Weather Experience</span>

                </div>

                <div className="About-stat-divider"></div>

                <div className="About-stat">

                    <strong>Modern</strong>

                    <span>Interface</span>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="About-cta">

                <div className="About-cta-glow"></div>

                <div className="About-cta-icon">
                    🌦️
                </div>

                <div className="About-cta-content">

                    <span>READY TO EXPLORE?</span>

                    <h2>
                        Discover what's happening
                        <strong> outside.</strong>
                    </h2>

                    <p>
                        Check the weather for your location and
                        stay prepared for the day ahead.
                    </p>

                </div>

                <Link to="/weather" className="About-cta-button">
                    Check Weather
                    <span>→</span>
                </Link>

            </section>

        </main>
    );
}