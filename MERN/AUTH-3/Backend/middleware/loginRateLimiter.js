const rateLimit = require("express-rate-limit");

const loginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 15, // maximum 5 attempts
    message: {
        success: false,
        message: "To many login attempts. Pleasy try again after 15 minutes."
    }
});
module.exports = loginRateLimiter;