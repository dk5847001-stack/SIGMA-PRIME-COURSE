import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyOTP() {

    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState(
        location.state?.email || ""
    );

    const [otp, setOtp] = useState("");

    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {

        if (!location.state?.email) {

            navigate("/signup");

        }

    }, [location.state, navigate]);

    const handleOTPChange = (event) => {

        const value = event.target.value;

        if (/^\d*$/.test(value) && value.length <= 6) {
            setOtp(value);
        }

    };

    const handleVerify = async (event) => {

        event.preventDefault();

        setError("");
        setSuccess("");

        if (otp.length !== 6) {

            setError("Please enter a 6-digit OTP.");

            return;
        }

        try {

            setLoading(true);

            const response = await fetch(
                "http://localhost:3000/verify-otp",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify({
                        email,
                        otp
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {

                if (data.errors) {
                    setError(data.errors.join(", "));
                } else {
                    setError(
                        data.message || "OTP verification failed!"
                    );
                }

                return;
            }

            setSuccess(data.message);

            // OTP verify hone ke baad JWT cookie set ho chuki hai
            setTimeout(() => {
                navigate("/profile");
            }, 1000);

        } catch (error) {

            console.error(error);

            setError(
                "Unable to connect with server!"
            );

        } finally {

            setLoading(false);

        }
    };

    const handleResend = async () => {

        setError("");
        setSuccess("");

        try {

            setResendLoading(true);

            const response = await fetch(
                "http://localhost:3000/resend-otp",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify({
                        email
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {

                setError(
                    data.message || "Failed to resend OTP!"
                );

                return;
            }

            setSuccess(data.message);

            setOtp("");

        } catch (error) {

            console.error(error);

            setError(
                "Unable to connect with server!"
            );

        } finally {

            setResendLoading(false);

        }
    };

    return (
        <div className="auth-page">

            <div className="auth-card otp-card">

                <div className="auth-header">

                    <div className="auth-icon">
                        📧
                    </div>

                    <h1>Verify Email</h1>

                    <p>
                        We've sent a 6-digit OTP to
                    </p>

                    <strong className="email-text">
                        {email}
                    </strong>

                </div>

                {error && (
                    <div className="error-message">
                        ❌ {error}
                    </div>
                )}

                {success && (
                    <div className="success-message">
                        ✅ {success}
                    </div>
                )}

                <form onSubmit={handleVerify}>

                    <div className="input-group">

                        <label>
                            Enter OTP
                        </label>

                        <input
                            className="otp-input"
                            type="text"
                            inputMode="numeric"
                            placeholder="000000"
                            value={otp}
                            onChange={handleOTPChange}
                            maxLength={6}
                            autoFocus
                        />

                    </div>

                    <button
                        type="submit"
                        className="auth-btn"
                        disabled={loading}
                    >

                        {loading
                            ? "Verifying..."
                            : "Verify OTP"
                        }

                    </button>

                </form>

                <div className="resend-section">

                    <p>
                        Didn't receive the OTP?
                    </p>

                    <button
                        onClick={handleResend}
                        className="link-btn"
                        disabled={resendLoading}
                    >

                        {resendLoading
                            ? "Sending..."
                            : "Resend OTP"
                        }

                    </button>

                </div>

                <button
                    onClick={() => navigate("/signup")}
                    className="back-btn"
                >
                    ← Back to Signup
                </button>

            </div>

        </div>
    );
}

export default VerifyOTP;