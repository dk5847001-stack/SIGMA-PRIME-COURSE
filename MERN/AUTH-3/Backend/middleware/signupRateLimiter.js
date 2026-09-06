const rateLimit = require("express-rate-limit");

const signupRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // maximum 5 attempts
    message: {
        success: false,
        message: "To many signup attempts. Please try again after 15 minutes."
    }
});
module.exports = signupRateLimiter;