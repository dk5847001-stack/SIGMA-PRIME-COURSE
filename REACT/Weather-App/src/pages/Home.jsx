import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <main className="Home">

            {/* ================= HERO ================= */}
            <section className="Home-hero">

                <div className="Hero-background">
                    <div className="Hero-orb Hero-orb-one"></div>
                    <div className="Hero-orb Hero-orb-two"></div>
                </div>

                <div className="Hero-content">

                    <div className="Hero-badge">
                        <span className="Live-dot"></span>
                        Live Weather Experience
                    </div>

                    <h1>
                        Weather that keeps
                        <span> you prepared.</span>
                    </h1>

                    <p>
                        Discover real-time weather conditions, temperature,
                        forecasts and essential weather information —
                        all in one beautiful experience.
                    </p>

                    <div className="Hero-buttons">

                        <Link to="/weather" className="Hero-primary-btn">
                            Check Weather
                            <span>→</span>
                        </Link>

                        <Link to="/about" className="Hero-secondary-btn">
                            Explore More
                        </Link>

                    </div>

                    {/* Trust Info */}
                    <div className="Hero-trust">

                        <div className="Trust-item">
                            <strong>24/7</strong>
                            <span>Availability</span>
                        </div>

                        <div className="Trust-divider"></div>

                        <div className="Trust-item">
                            <strong>Real-Time</strong>
                            <span>Weather Data</span>
                        </div>

                        <div className="Trust-divider"></div>

                        <div className="Trust-item">
                            <strong>Simple</strong>
                            <span>Experience</span>
                        </div>

                    </div>

                </div>

                {/* Weather Visual */}
                <div className="Hero-weather-card">

                    <div className="Weather-card-top">
                        <span>Current Weather</span>
                        <span className="Weather-status">
                            ● Live
                        </span>
                    </div>

                    <div className="Weather-main">

                        <div className="Weather-icon">
                            ☀️
                        </div>

                        <div>
                            <div className="Weather-temperature">
                                24°
                            </div>

                            <div className="Weather-condition">
                                Clear Sky
                            </div>
                        </div>

                    </div>

                    <div className="Weather-location">
                        <span>📍</span>
                        <span>Explore your location</span>
                    </div>

                    <div className="Weather-details">

                        <div>
                            <span>💧</span>
                            <small>Humidity</small>
                            <strong>65%</strong>
                        </div>

                        <div>
                            <span>💨</span>
                            <small>Wind</small>
                            <strong>12 km/h</strong>
                        </div>

                        <div>
                            <span>🌡️</span>
                            <small>Feels Like</small>
                            <strong>25°</strong>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= FEATURES ================= */}
            <section className="Home-features">

                <div className="Section-heading">

                    <span>WHY WEATHER APP</span>

                    <h2>
                        Everything you need to
                        <strong> understand the weather.</strong>
                    </h2>

                    <p>
                        A clean and modern weather experience designed
                        to make weather information easier to understand.
                    </p>

                </div>


                <div className="Features-grid">

                    <div className="Feature-card">

                        <div className="Feature-icon">
                            🌤️
                        </div>

                        <h3>Real-Time Weather</h3>

                        <p>
                            Get current weather conditions and
                            important environmental information.
                        </p>

                        <Link to="/weather">
                            Explore Weather <span>→</span>
                        </Link>

                    </div>


                    <div className="Feature-card">

                        <div className="Feature-icon">
                            🌡️
                        </div>

                        <h3>Temperature Insights</h3>

                        <p>
                            Easily understand temperature and
                            how the weather actually feels.
                        </p>

                        <Link to="/weather">
                            View Temperature <span>→</span>
                        </Link>

                    </div>


                    <div className="Feature-card">

                        <div className="Feature-icon">
                            ⚡
                        </div>

                        <h3>Fast & Simple</h3>

                        <p>
                            A lightweight and intuitive interface
                            built for a smooth user experience.
                        </p>

                        <Link to="/service">
                            Discover Services <span>→</span>
                        </Link>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="Home-cta">

                <div className="CTA-glow"></div>

                <div className="CTA-content">

                    <div className="CTA-icon">
                        🌍
                    </div>

                    <div>
                        <span className="CTA-label">
                            READY TO EXPLORE?
                        </span>

                        <h2>
                            Know your weather.
                            <span> Plan your day.</span>
                        </h2>

                        <p>
                            Search for a location and discover
                            its current weather conditions.
                        </p>
                    </div>

                </div>

                <Link to="/weather" className="CTA-button">
                    Get Started
                    <span>→</span>
                </Link>

            </section>

        </main>
    );
}