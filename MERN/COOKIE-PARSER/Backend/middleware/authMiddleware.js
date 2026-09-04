const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try{
        const token = req.cookies.accessTokenName;
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Please login first bro!"
            })
        };
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user = decoded;
        next();
    }catch(err){
        res.status(401).json({
            success: false,
            message: "Ivalid or expired token!",
            error: err.message
        })
    }
}

module.exports = authMiddleware;