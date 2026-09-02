const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        // 1. Get authorization header
        const authHeader = req.headers.authorization;

        // 2. check token exists
        if(!authHeader){
            return res.status(401).json({
                success: false,
                message: "Access denied. Token requird!"
            })
        };

        //  3. Extract token
        const token = authHeader.split(" ")[1];

        //  4. Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // 5. Save decoded user information
        req.user = decoded;

        // Continue to next middleware/route
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid or expired token."
        })
    }
}

module.exports = authMiddleware;