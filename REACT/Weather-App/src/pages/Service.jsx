import { Link } from "react-router-dom";
import "./Service.css";

export default function Service() {
    return (
        <main className="Service">

            {/* ================= HERO ================= */}
            <section className="Service-hero">
                <div className="Service-glow Service-glow-one"></div>
                <div className="Service-glow Service-glow-two"></div>

                <div className="Service-hero-content">

                    <div className="Service-badge">
                        <span>✦</span>
                        Our Services
                    </div>

                    <h1>
                        Everything you need
                        <span> to understand the weather.</span>
                    </h1>

                    <p>
                        Explore a modern weather experience designed to help
                        you discover useful weather information quickly,
                        clearly and effortlessly.
                    </p>

                    <div className="Service-hero-buttons">

                        <Link
                            to="/weather"
                            className="Service-primary-btn"
                        >
                            Explore Weather
                            <span>→</span>
                        </Link>

                        <Link
                            to="/contact"
                            className="Service-secondary-btn"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>


                {/* Hero Visual */}

                <div className="Service-hero-visual">

                    <div className="Service-orbit orbit-main"></div>
                    <div className="Service-orbit orbit-inner"></div>

                    <div className="Service-weather-core">
                        <span>🌤️</span>
                        <strong>Weather</strong>
                        <small>Made Simple</small>
                    </div>

                    <div className="Service-floating-card service-temp">
                        <span>🌡️</span>
                        <div>
                            <small>Temperature</small>
                            <strong>24°C</strong>
                        </div>
                    </div>

                    <div className="Service-floating-card service-cloud">
                        <span>☁️</span>
                        <div>
                            <small>Conditions</small>
                            <strong>Partly Cloudy</strong>
                        </div>
                    </div>

                    <div className="Service-floating-card service-wind">
                        <span>💨</span>
                        <div>
                            <small>Wind</small>
                            <strong>12 km/h</strong>
                        </div>
                    </div>

                </div>

            </section>


            {/* ================= SERVICES INTRO ================= */}
            <section className="Service-intro">

                <div className="Service-section-heading">

                    <span>WHAT WE PROVIDE</span>

                    <h2>
                        Weather tools designed
                        <strong> for everyday life.</strong>
                    </h2>

                    <p>
                        Our platform focuses on making weather information
                        easier to access, understand and use.
                    </p>

                </div>

            </section>


            {/* ================= SERVICE CARDS ================= */}
            <section className="Service-grid-section">

                <div className="Service-grid">

                    {/* Card 01 */}
                    <div className="Service-card">

                        <div className="Service-card-top">

                            <div className="Service-icon">
                                🌤️
                            </div>

                            <span className="Service-number">
                                01
                            </span>

                        </div>

                        <h3>
                            Current Weather
                        </h3>

                        <p>
                            Get an easy-to-understand overview of current
                            weather conditions for your selected location.
                        </p>

                        <div className="Service-card-tags">
                            <span>Temperature</span>
                            <span>Conditions</span>
                        </div>

                    </div>


                    {/* Card 02 */}
                    <div className="Service-card">

                        <div className="Service-card-top">

                            <div className="Service-icon">
                                📍
                            </div>

                            <span className="Service-number">
                                02
                            </span>

                        </div>

                        <h3>
                            Location Search
                        </h3>

                        <p>
                            Search for locations and discover weather
                            information wherever you need it.
                        </p>

                        <div className="Service-card-tags">
                            <span>Search</span>
                            <span>Locations</span>
                        </div>

                    </div>


                    {/* Card 03 */}
                    <div className="Service-card">

                        <div className="Service-card-top">

                            <div className="Service-icon">
                                🌡️
                            </div>

                            <span className="Service-number">
                                03
                            </span>

                        </div>

                        <h3>
                            Temperature Insights
                        </h3>

                        <p>
                            Understand temperature information through a
                            clean and simple visual experience.
                        </p>

                        <div className="Service-card-tags">
                            <span>Temperature</span>
                            <span>Insights</span>
                        </div>

                    </div>


                    {/* Card 04 */}
                    <div className="Service-card">

                        <div className="Service-card-top">

                            <div className="Service-icon">
                                💧
                            </div>

                            <span className="Service-number">
                                04
                            </span>

                        </div>

                        <h3>
                            Humidity Information
                        </h3>

                        <p>
                            Quickly check humidity levels and understand
                            how they may affect your day.
                        </p>

                        <div className="Service-card-tags">
                            <span>Humidity</span>
                            <span>Conditions</span>
                        </div>

                    </div>


                    {/* Card 05 */}
                    <div className="Service-card">

                        <div className="Service-card-top">

                            <div className="Service-icon">
                                💨
                            </div>

                            <span className="Service-number">
                                05
                            </span>

                        </div>

                        <h3>
                            Wind Information
                        </h3>

                        <p>
                            Explore useful wind information through a
                            straightforward weather interface.
                        </p>

                        <div className="Service-card-tags">
                            <span>Wind Speed</span>
                            <span>Direction</span>
                        </div>

                    </div>


                    {/* Card 06 */}
                    <div className="Service-card">

                        <div className="Service-card-top">

                            <div className="Service-icon">
                                📱
                            </div>

                            <span className="Service-number">
                                06
                            </span>

                        </div>

                        <h3>
                            Responsive Experience
                        </h3>

                        <p>
                            Enjoy the same smooth weather experience across
                            desktop, tablet and mobile devices.
                        </p>

                        <div className="Service-card-tags">
                            <span>Mobile</span>
                            <span>Responsive</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= BENEFITS ================= */}
            <section className="Service-benefits">

                <div className="Service-benefits-visual">

                    <div className="Benefits-ring ring-one"></div>
                    <div className="Benefits-ring ring-two"></div>

                    <div className="Benefits-center">
                        <span>⚡</span>
                        <strong>Simple</strong>
                        <small>Fast & Useful</small>
                    </div>

                </div>


                <div className="Service-benefits-content">

                    <span className="Service-label">
                        WHY USE OUR SERVICES?
                    </span>

                    <h2>
                        Built to keep
                        <span> weather simple.</span>
                    </h2>

                    <p>
                        Instead of overwhelming you with unnecessary
                        information, Weather App focuses on the details
                        that help you make better everyday decisions.
                    </p>


                    <div className="Benefits-list">

                        <div className="Benefit-item">

                            <div className="Benefit-check">
                                ✓
                            </div>

                            <div>
                                <strong>
                                    Clean Interface
                                </strong>

                                <p>
                                    Important weather information stays
                                    easy to find and understand.
                                </p>
                            </div>

                        </div>


                        <div className="Benefit-item">

                            <div className="Benefit-check">
                                ✓
                            </div>

                            <div>
                                <strong>
                                    Easy Navigation
                                </strong>

                                <p>
                                    Quickly move between locations and
                                    weather information.
                                </p>
                            </div>

                        </div>


                        <div className="Benefit-item">

                            <div className="Benefit-check">
                                ✓
                            </div>

                            <div>
                                <strong>
                                    Modern Experience
                                </strong>

                                <p>
                                    A polished interface designed for
                                    today's devices.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= HOW IT WORKS ================= */}
            <section className="Service-process">

                <div className="Service-section-heading center">

                    <span>HOW IT WORKS</span>

                    <h2>
                        Weather information
                        <strong> in three simple steps.</strong>
                    </h2>

                </div>


                <div className="Process-grid">

                    <div className="Process-card">

                        <div className="Process-number">
                            01
                        </div>

                        <div className="Process-icon">
                            📍
                        </div>

                        <h3>
                            Choose Location
                        </h3>

                        <p>
                            Search and select the location you want
                            to explore.
                        </p>

                    </div>


                    <div className="Process-line"></div>


                    <div className="Process-card">

                        <div className="Process-number">
                            02
                        </div>

                        <div className="Process-icon">
                            🔍
                        </div>

                        <h3>
                            Check Weather
                        </h3>

                        <p>
                            Explore the available weather information
                            for your location.
                        </p>

                    </div>


                    <div className="Process-line"></div>


                    <div className="Process-card">

                        <div className="Process-number">
                            03
                        </div>

                        <div className="Process-icon">
                            🌦️
                        </div>

                        <h3>
                            Stay Prepared
                        </h3>

                        <p>
                            Use the information to better plan your
                            day and activities.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="Service-cta">

                <div className="Service-cta-glow"></div>

                <div className="Service-cta-icon">
                    🌎
                </div>

                <div className="Service-cta-content">

                    <span>READY TO EXPLORE?</span>

                    <h2>
                        Your weather.
                        <strong> Your way.</strong>
                    </h2>

                    <p>
                        Explore the weather and discover a simpler
                        way to stay informed.
                    </p>

                </div>

                <Link
                    to="/weather"
                    className="Service-cta-button"
                >
                    Check Weather
                    <span>→</span>
                </Link>

            </section>

        </main>
    );
}