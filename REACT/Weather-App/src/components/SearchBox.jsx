import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {

    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const API_URL =
        "https://api.openweathermap.org/data/2.5/weather";

    const API_KEY =
        "738e561665f566cf8f90d5ab30958c0e";


    // =========================================
    // FETCH WEATHER DATA
    // =========================================

    const getWeatherInfo = async (city) => {

        try {

            setLoading(true);
            setError("");

            const response = await fetch(
                `${API_URL}?q=${encodeURIComponent(
                    city
                )}&appid=${API_KEY}&units=metric`
            );

            const jsonResponse = await response.json();

            console.log("Weather API Response:", jsonResponse);


            if (!response.ok) {

                if (response.status === 404) {
                    throw new Error("CITY_NOT_FOUND");
                }

                if (response.status === 401) {
                    throw new Error("INVALID_API_KEY");
                }

                throw new Error(
                    jsonResponse.message ||
                    "Unable to fetch weather information."
                );
            }


            const result = {

                name: jsonResponse.name,

                feels_like:
                    jsonResponse.main?.feels_like ?? 0,

                grnd_level:
                    jsonResponse.main?.grnd_level ?? 0,

                humidity:
                    jsonResponse.main?.humidity ?? 0,

                pressure:
                    jsonResponse.main?.pressure ?? 0,

                sea_level:
                    jsonResponse.main?.sea_level ?? 0,

                temp:
                    jsonResponse.main?.temp ?? 0,

                temp_max:
                    jsonResponse.main?.temp_max ?? 0,

                temp_min:
                    jsonResponse.main?.temp_min ?? 0,

                country:
                    jsonResponse.sys?.country ?? "--",

                sunrise:
                    jsonResponse.sys?.sunrise ?? 0,

                sunset:
                    jsonResponse.sys?.sunset ?? 0,

                weather:
                    jsonResponse.weather?.[0]?.description ??
                    "Unknown"

            };


            // Send data to Weather.jsx
            updateInfo(result);

        }

        catch (err) {

            console.error("Weather Error:", err);

            if (err.message === "CITY_NOT_FOUND") {

                setError(
                    "City not found. Please check the spelling and try again."
                );

            }

            else if (err.message === "INVALID_API_KEY") {

                setError(
                    "Weather service configuration error."
                );

            }

            else {

                setError(
                    "Unable to fetch weather information. Please try again."
                );
            }

        }

        finally {

            setLoading(false);

        }
    };


    // =========================================
    // INPUT HANDLER
    // =========================================

    const handleInput = (event) => {

        setInput(event.target.value);

        if (error) {
            setError("");
        }
    };


    // =========================================
    // SEARCH
    // =========================================

    const handleSubmit = async (event) => {

        event.preventDefault();

        const city = input.trim();

        if (!city) {

            setError(
                "Please enter a city name."
            );

            return;
        }

        if (loading) {
            return;
        }

        await getWeatherInfo(city);

    };


    // =========================================
    // CLEAR INPUT
    // =========================================

    const clearInput = () => {

        setInput("");
        setError("");

    };


    return (

        <div className="SearchBox">

            <form
                className="SearchBox-form"
                onSubmit={handleSubmit}
            >

                {/* =================================
                    SEARCH INPUT
                ================================== */}

                <div
                    className={`SearchBox-input-wrapper ${
                        error
                            ? "SearchBox-input-error"
                            : ""
                    }`}
                >

                    <div className="SearchBox-search-icon">
                        <SearchIcon />
                    </div>


                    <div className="SearchBox-input-content">

                        <label htmlFor="city">
                            Search Location
                        </label>

                        <input
                            id="city"
                            type="text"
                            value={input}
                            onChange={handleInput}
                            placeholder="Enter city name..."
                            autoComplete="off"
                            disabled={loading}
                            aria-invalid={Boolean(error)}
                        />

                    </div>


                    {/* Clear Button */}

                    {input && !loading && (

                        <button
                            type="button"
                            className="SearchBox-clear"
                            onClick={clearInput}
                            aria-label="Clear search"
                        >
                            <CloseIcon />
                        </button>

                    )}

                </div>


                {/* =================================
                    SEARCH BUTTON
                ================================== */}

                <button
                    type="submit"
                    className={`SearchBox-button ${
                        loading
                            ? "SearchBox-button-loading"
                            : ""
                    }`}
                    disabled={loading}
                >

                    {loading ? (

                        <>
                            <span className="SearchBox-spinner"></span>

                            <span>
                                Searching...
                            </span>
                        </>

                    ) : (

                        <>

                            <span>
                                Search Weather
                            </span>

                            <SearchIcon />

                        </>

                    )}

                </button>

            </form>


            {/* =================================
                ERROR MESSAGE
            ================================== */}

            {error && (

                <div
                    className="SearchBox-error"
                    role="alert"
                >

                    <span className="SearchBox-error-icon">
                        !
                    </span>

                    <span>
                        {error}
                    </span>

                    <button
                        type="button"
                        onClick={() => setError("")}
                        aria-label="Dismiss error"
                    >
                        <CloseIcon />
                    </button>

                </div>

            )}


            {/* =================================
                SEARCH HINT
            ================================== */}

            {!error && (

                <div className="SearchBox-hint">

                    <span>
                        ✦
                    </span>

                    <p>
                        Enter a city name to discover
                        current weather conditions.
                    </p>

                    <kbd>
                        Enter ↵
                    </kbd>

                </div>

            )}

        </div>
    );
}