import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
    return (
        <main className="Contact">

            {/* ================= HERO ================= */}
            <section className="Contact-hero">

                <div className="Contact-glow Contact-glow-one"></div>
                <div className="Contact-glow Contact-glow-two"></div>

                <div className="Contact-hero-content">

                    <div className="Contact-badge">
                        <span>✦</span>
                        Get In Touch
                    </div>

                    <h1>
                        Let's start a
                        <span> conversation.</span>
                    </h1>

                    <p>
                        Have a question, suggestion or feedback?
                        We'd love to hear from you. Send us a message
                        and we'll get back to you as soon as possible.
                    </p>

                    <div className="Contact-hero-points">

                        <div>
                            <span>✓</span>
                            Quick Response
                        </div>

                        <div>
                            <span>✓</span>
                            Friendly Support
                        </div>

                        <div>
                            <span>✓</span>
                            Always Improving
                        </div>

                    </div>

                </div>

                <div className="Contact-hero-visual">

                    <div className="Contact-visual-circle circle-large"></div>
                    <div className="Contact-visual-circle circle-small"></div>

                    <div className="Contact-visual-icon">
                        💬
                    </div>

                    <div className="Contact-floating floating-one">
                        ✉️
                    </div>

                    <div className="Contact-floating floating-two">
                        ⚡
                    </div>

                    <div className="Contact-floating floating-three">
                        🌐
                    </div>

                </div>

            </section>


            {/* ================= CONTACT SECTION ================= */}
            <section className="Contact-section">

                {/* Information */}
                <div className="Contact-information">

                    <span className="Contact-section-label">
                        CONTACT INFORMATION
                    </span>

                    <h2>
                        We're here to
                        <span> help you.</span>
                    </h2>

                    <p className="Contact-info-description">
                        Whether you have a question about the weather,
                        want to share feedback or simply want to say hello,
                        feel free to reach out.
                    </p>


                    <div className="Contact-info-list">

                        <div className="Contact-info-card">

                            <div className="Contact-info-icon">
                                ✉️
                            </div>

                            <div>
                                <small>Email</small>
                                <strong>support@weatherapp.com</strong>
                                <span>Send us an email anytime</span>
                            </div>

                        </div>


                        <div className="Contact-info-card">

                            <div className="Contact-info-icon">
                                📍
                            </div>

                            <div>
                                <small>Location</small>
                                <strong>Available Worldwide</strong>
                                <span>Weather information everywhere</span>
                            </div>

                        </div>


                        <div className="Contact-info-card">

                            <div className="Contact-info-icon">
                                ⚡
                            </div>

                            <div>
                                <small>Response Time</small>
                                <strong>Within 24 Hours</strong>
                                <span>We try to respond quickly</span>
                            </div>

                        </div>

                    </div>


                    {/* Social */}
                    <div className="Contact-social-section">

                        <span>FOLLOW US</span>

                        <div className="Contact-socials">

                            <a href="#" aria-label="Facebook">
                                f
                            </a>

                            <a href="#" aria-label="Instagram">
                                ◎
                            </a>

                            <a href="#" aria-label="X">
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

                </div>


                {/* ================= FORM ================= */}
                <div className="Contact-form-card">

                    <div className="Contact-form-header">

                        <div>
                            <span>MESSAGE US</span>

                            <h3>
                                Send us a message
                            </h3>
                        </div>

                        <div className="Form-header-icon">
                            ✨
                        </div>

                    </div>


                    <form>

                        <div className="Contact-form-row">

                            <div className="Contact-input-group">

                                <label htmlFor="name">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                />

                            </div>


                            <div className="Contact-input-group">

                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                />

                            </div>

                        </div>


                        <div className="Contact-input-group">

                            <label htmlFor="subject">
                                Subject
                            </label>

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="How can we help?"
                            />

                        </div>


                        <div className="Contact-input-group">

                            <label htmlFor="message">
                                Your Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Write your message here..."
                            ></textarea>

                        </div>


                        <button
                            type="submit"
                            className="Contact-submit-btn"
                        >
                            Send Message
                            <span>→</span>
                        </button>

                        <p className="Contact-form-note">
                            🔒 Your information is handled with care.
                        </p>

                    </form>

                </div>

            </section>


            {/* ================= HELP CARDS ================= */}
            <section className="Contact-help">

                <div className="Contact-section-heading">

                    <span>NEED MORE HELP?</span>

                    <h2>
                        Find the right
                        <strong> place to start.</strong>
                    </h2>

                </div>


                <div className="Contact-help-grid">

                    <Link to="/weather" className="Contact-help-card">

                        <div className="Help-icon">
                            🌤️
                        </div>

                        <div>
                            <h3>Weather Information</h3>

                            <p>
                                Looking for current weather conditions?
                                Explore our weather page.
                            </p>

                            <span>
                                Check Weather →
                            </span>
                        </div>

                    </Link>


                    <Link to="/service" className="Contact-help-card">

                        <div className="Help-icon">
                            ⚡
                        </div>

                        <div>
                            <h3>Our Services</h3>

                            <p>
                                Learn more about the features and services
                                available on Weather App.
                            </p>

                            <span>
                                Explore Services →
                            </span>
                        </div>

                    </Link>


                    <Link to="/about" className="Contact-help-card">

                        <div className="Help-icon">
                            ℹ️
                        </div>

                        <div>
                            <h3>About Weather App</h3>

                            <p>
                                Learn more about our mission and
                                the idea behind the platform.
                            </p>

                            <span>
                                Learn More →
                            </span>
                        </div>

                    </Link>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="Contact-cta">

                <div className="Contact-cta-glow"></div>

                <div className="Contact-cta-icon">
                    🌎
                </div>

                <div className="Contact-cta-content">

                    <span>WEATHER IS EVERYWHERE</span>

                    <h2>
                        Stay informed.
                        <strong> Stay prepared.</strong>
                    </h2>

                    <p>
                        Explore weather information for your next
                        destination.
                    </p>

                </div>

                <Link
                    to="/weather"
                    className="Contact-cta-button"
                >
                    Explore Weather
                    <span>→</span>
                </Link>

            </section>

        </main>
    );
}