const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        // Check Authorization header
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Access denied. No token provided!"
            });
        }

        // Check Bearer token
        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Invalid authorization format!"
            });
        }

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Store decoded user information in request
        req.user = decoded;

        next();

    } catch (err) {

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token!"
        });

    }
};

module.exports = authMiddleware;