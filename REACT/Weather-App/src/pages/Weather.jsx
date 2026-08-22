import { useState } from "react";
import SearchBox from "../components/SearchBox";
import InfoBox from "../components/InfoBox";
import "./Weather.css";

export default function Weather() {

    const [weatherInfo, setWeatherInfo] = useState({
        name: "Delhi",
        feels_like: 0,
        grnd_level: 0,
        humidity: 0,
        pressure: 0,
        sea_level: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        country: "IN",
        sunrise: 0,
        sunset: 0,
        weather: "Clear"
    });

    const updateInfo = (result) => {
        setWeatherInfo(result);
    };

    return (
        <main className="Weather">

            {/* =========================================
                BACKGROUND DECORATION
            ========================================== */}

            <div className="Weather-bg-glow Weather-bg-glow-one"></div>
            <div className="Weather-bg-glow Weather-bg-glow-two"></div>
            <div className="Weather-grid"></div>


            {/* =========================================
                HERO SECTION
            ========================================== */}

            <section className="Weather-hero">

                <div className="Weather-hero-content">

                    <div className="Weather-status-badge">
                        <span className="Weather-status-dot"></span>
                        LIVE WEATHER
                    </div>

                    <h1>
                        Weather,
                        <span> reimagined.</span>
                    </h1>

                    <p>
                        Discover accurate weather information for
                        any location with a clean, fast and modern
                        weather experience.
                    </p>

                </div>

                <div className="Weather-hero-decoration">

                    <div className="Weather-sun">
                        ☀️
                    </div>

                    <div className="Weather-cloud Weather-cloud-one">
                        ☁️
                    </div>

                    <div className="Weather-cloud Weather-cloud-two">
                        ☁️
                    </div>

                </div>

            </section>


            {/* =========================================
                SEARCH SECTION
            ========================================== */}

            <section className="Weather-search-section">

                <div className="Weather-section-heading">

                    <div>
                        <span>
                            LOCATION SEARCH
                        </span>

                        <h2>
                            Find weather anywhere
                        </h2>
                    </div>

                    <div className="Weather-search-icon">
                        🔎
                    </div>

                </div>

                <div className="Weather-search-box">
                    <SearchBox updateInfo={updateInfo} />
                </div>

            </section>


            {/* =========================================
                CURRENT LOCATION SUMMARY
            ========================================== */}

            <section className="Weather-location-bar">

                <div className="Weather-location-info">

                    <div className="Weather-location-icon">
                        📍
                    </div>

                    <div>

                        <span>
                            CURRENTLY VIEWING
                        </span>

                        <h3>
                            {weatherInfo.name || "Unknown Location"}
                        </h3>

                    </div>

                </div>

                <div className="Weather-location-meta">

                    <div>
                        <span>COUNTRY</span>
                        <strong>
                            {weatherInfo.country || "--"}
                        </strong>
                    </div>

                    <div className="Weather-meta-divider"></div>

                    <div>
                        <span>CONDITION</span>
                        <strong>
                            {weatherInfo.weather || "Unknown"}
                        </strong>
                    </div>

                </div>

            </section>


            {/* =========================================
                WEATHER INFORMATION
            ========================================== */}

            <section className="Weather-dashboard">

                <div className="Weather-dashboard-header">

                    <div>

                        <span className="Weather-eyebrow">
                            WEATHER OVERVIEW
                        </span>

                        <h2>
                            Current Conditions
                        </h2>

                    </div>

                    <div className="Weather-live-label">
                        <span></span>
                        Live Data
                    </div>

                </div>

                <div className="Weather-info-container">

                    <InfoBox info={weatherInfo} />

                </div>

            </section>


            {/* =========================================
                QUICK STATS
            ========================================== */}

            <section className="Weather-quick-stats">

                <div className="Weather-stat-card">

                    <div className="Weather-stat-icon">
                        💧
                    </div>

                    <div>

                        <span>
                            HUMIDITY
                        </span>

                        <strong>
                            {weatherInfo.humidity || 0}%
                        </strong>

                    </div>

                </div>


                <div className="Weather-stat-card">

                    <div className="Weather-stat-icon">
                        🌡️
                    </div>

                    <div>

                        <span>
                            FEELS LIKE
                        </span>

                        <strong>
                            {weatherInfo.feels_like || 0}°C
                        </strong>

                    </div>

                </div>


                <div className="Weather-stat-card">

                    <div className="Weather-stat-icon">
                        🧭
                    </div>

                    <div>

                        <span>
                            PRESSURE
                        </span>

                        <strong>
                            {weatherInfo.pressure || 0}
                        </strong>

                    </div>

                </div>


                <div className="Weather-stat-card">

                    <div className="Weather-stat-icon">
                        🌊
                    </div>

                    <div>

                        <span>
                            SEA LEVEL
                        </span>

                        <strong>
                            {weatherInfo.sea_level || 0}
                        </strong>

                    </div>

                </div>

            </section>


            {/* =========================================
                FOOTER MESSAGE
            ========================================== */}

            <section className="Weather-bottom-message">

                <div className="Weather-bottom-icon">
                    ✦
                </div>

                <div>

                    <strong>
                        Stay ahead of the weather
                    </strong>

                    <p>
                        Search another location anytime to get
                        updated weather information.
                    </p>

                </div>

            </section>

        </main>
    );
}