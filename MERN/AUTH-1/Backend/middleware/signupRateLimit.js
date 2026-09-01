const rateLimit = require("express-rate-limit");

const signupLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        success: false,
        message: "Too many signup attempts. Please try again later."
    }
});
module.exports = signupLimiter;