const rateLimit = require("express-rate-limit");

const signupRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 signup requests per `window` (here, per 15 minutes)
    message: {
        success: false,
        message: "Too many signup attempts from this IP, please try again after 15 minutes."
    }
});

module.exports = signupRateLimit;