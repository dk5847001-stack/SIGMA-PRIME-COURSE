import "./InfoBox.css";

export default function InfoBox({ info }) {

    // =========================================
    // SAFE VALUES
    // =========================================

    const temperature = Number(info?.temp ?? 0);
    const feelsLike = Number(info?.feels_like ?? 0);
    const humidity = Number(info?.humidity ?? 0);
    const pressure = Number(info?.pressure ?? 0);
    const tempMax = Number(info?.temp_max ?? 0);
    const tempMin = Number(info?.temp_min ?? 0);
    const seaLevel = Number(info?.sea_level ?? 0);
    const groundLevel = Number(info?.grnd_level ?? 0);

    const city = info?.name || "Unknown";
    const country = info?.country || "--";
    const weather = info?.weather || "Unknown";


    // =========================================
    // WEATHER ICON
    // =========================================

    const getWeatherIcon = (condition) => {

        const value = condition.toLowerCase();

        if (value.includes("thunder")) {
            return "⛈️";
        }

        if (
            value.includes("rain") ||
            value.includes("drizzle")
        ) {
            return "🌧️";
        }

        if (
            value.includes("snow")
        ) {
            return "❄️";
        }

        if (
            value.includes("mist") ||
            value.includes("fog") ||
            value.includes("haze") ||
            value.includes("smoke")
        ) {
            return "🌫️";
        }

        if (
            value.includes("cloud")
        ) {
            return "☁️";
        }

        if (
            value.includes("clear")
        ) {
            return "☀️";
        }

        return "🌤️";
    };


    // =========================================
    // FORMAT WEATHER
    // =========================================

    const formatWeather = (value) => {

        if (!value) {
            return "Unknown";
        }

        return value
            .split(" ")
            .map(
                word =>
                    word.charAt(0).toUpperCase() +
                    word.slice(1)
            )
            .join(" ");
    };


    // =========================================
    // TIME FORMAT
    // =========================================

    const formatTime = (timestamp) => {

        if (!timestamp) {
            return "--:--";
        }

        return new Date(timestamp * 1000)
            .toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            });
    };


    return (

        <div className="InfoBox">

            {/* =================================
                MAIN WEATHER CARD
            ================================== */}

            <div className="InfoBox-main-card">

                {/* Background decoration */}

                <div className="InfoBox-glow"></div>

                <div className="InfoBox-top">

                    {/* Location */}

                    <div className="InfoBox-location">

                        <div className="InfoBox-location-icon">
                            📍
                        </div>

                        <div>

                            <span>
                                CURRENT LOCATION
                            </span>

                            <h2>
                                {city}
                            </h2>

                            <p>
                                {country}
                            </p>

                        </div>

                    </div>


                    {/* Weather Condition */}

                    <div className="InfoBox-condition">

                        <div className="InfoBox-condition-icon">
                            {getWeatherIcon(weather)}
                        </div>

                        <span>
                            {formatWeather(weather)}
                        </span>

                    </div>

                </div>


                {/* =================================
                    TEMPERATURE
                ================================== */}

                <div className="InfoBox-temperature-section">

                    <div className="InfoBox-temperature">

                        {Math.round(temperature)}

                        <sup>
                            °C
                        </sup>

                    </div>

                    <div className="InfoBox-temperature-label">

                        <span>
                            FEELS LIKE
                        </span>

                        <strong>
                            {Math.round(feelsLike)}°C
                        </strong>

                    </div>

                </div>


                {/* =================================
                    MIN MAX
                ================================== */}

                <div className="InfoBox-temp-range">

                    <div className="InfoBox-range-item">

                        <span className="InfoBox-range-icon">
                            ↑
                        </span>

                        <div>

                            <small>
                                MAXIMUM
                            </small>

                            <strong>
                                {Math.round(tempMax)}°C
                            </strong>

                        </div>

                    </div>


                    <div className="InfoBox-range-divider"></div>


                    <div className="InfoBox-range-item">

                        <span className="InfoBox-range-icon">
                            ↓
                        </span>

                        <div>

                            <small>
                                MINIMUM
                            </small>

                            <strong>
                                {Math.round(tempMin)}°C
                            </strong>

                        </div>

                    </div>

                </div>

            </div>


            {/* =================================
                WEATHER METRICS
            ================================== */}

            <div className="InfoBox-metrics">

                {/* Humidity */}

                <div className="InfoBox-metric-card">

                    <div className="InfoBox-metric-icon">
                        💧
                    </div>

                    <div>

                        <span>
                            HUMIDITY
                        </span>

                        <strong>
                            {humidity}%
                        </strong>

                        <small>
                            Atmospheric moisture
                        </small>

                    </div>

                </div>


                {/* Pressure */}

                <div className="InfoBox-metric-card">

                    <div className="InfoBox-metric-icon">
                        🧭
                    </div>

                    <div>

                        <span>
                            PRESSURE
                        </span>

                        <strong>
                            {pressure}
                            <em> hPa</em>
                        </strong>

                        <small>
                            Atmospheric pressure
                        </small>

                    </div>

                </div>


                {/* Sea Level */}

                <div className="InfoBox-metric-card">

                    <div className="InfoBox-metric-icon">
                        🌊
                    </div>

                    <div>

                        <span>
                            SEA LEVEL
                        </span>

                        <strong>
                            {seaLevel || "--"}
                            {seaLevel ? " hPa" : ""}
                        </strong>

                        <small>
                            Sea level pressure
                        </small>

                    </div>

                </div>


                {/* Ground Level */}

                <div className="InfoBox-metric-card">

                    <div className="InfoBox-metric-icon">
                        ⛰️
                    </div>

                    <div>

                        <span>
                            GROUND LEVEL
                        </span>

                        <strong>
                            {groundLevel || "--"}
                            {groundLevel ? " hPa" : ""}
                        </strong>

                        <small>
                            Ground level pressure
                        </small>

                    </div>

                </div>

            </div>


            {/* =================================
                SUN INFORMATION
            ================================== */}

            <div className="InfoBox-sun-card">

                <div className="InfoBox-sun-heading">

                    <div>

                        <span>
                            DAYLIGHT
                        </span>

                        <h3>
                            Sun Schedule
                        </h3>

                    </div>

                    <div className="InfoBox-sun-icon">
                        ☀️
                    </div>

                </div>


                <div className="InfoBox-sun-times">

                    <div className="InfoBox-sun-time">

                        <div className="InfoBox-sun-time-icon">
                            🌅
                        </div>

                        <div>

                            <span>
                                SUNRISE
                            </span>

                            <strong>
                                {formatTime(info?.sunrise)}
                            </strong>

                        </div>

                    </div>


                    <div className="InfoBox-sun-line"></div>


                    <div className="InfoBox-sun-time">

                        <div className="InfoBox-sun-time-icon">
                            🌇
                        </div>

                        <div>

                            <span>
                                SUNSET
                            </span>

                            <strong>
                                {formatTime(info?.sunset)}
                            </strong>

                        </div>

                    </div>

                </div>

            </div>


            {/* =================================
                FOOTER STATUS
            ================================== */}

            <div className="InfoBox-status">

                <span className="InfoBox-status-dot"></span>

                <span>
                    Weather data updated successfully
                </span>

                <span className="InfoBox-status-location">
                    {city}, {country}
                </span>

            </div>

        </div>
    );
}