require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/dbConfig");
const User = require("./models/User");
const signupRateLimiter = require("./middleware/signupRateLimiter");
const loginRateLimiter = require("./middleware/loginRateLimiter");
const authMiddleware = require("./middleware/authMiddleware");
const adminMiddleware = require("./middleware/adminMiddleware");
const PORT = process.env.PORT;
const app = express();

// ------------------ MIDDLEWARE ---------------------
app.use(helmet());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);
app.use(express.json());
app.use(cookieParser());
app.use("/signup", signupRateLimiter);
app.use("/login", loginRateLimiter);
app.use("/api", authMiddleware);
app.use("/admin", authMiddleware, adminMiddleware);
// ------------------ MONGODB CENNECTED ---------------------
connectDB();

// ------------------ ROUTES --------------------------------
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "api is working!"
    })
});

// --------------------- AUTH ROUTE ---------------------------
app.get("/api/profile", async (req, res) => {
    const user = await User.findById(req.user.userId);
    res.status(200).json({
        success: true,
        message: "Welcome to your profile",
        user: {
            name: user.name,
            email: user.email,
            role: user.role
        }
    })
})

// ----------------------- ADMIN ROUTE --------------------------
app.get("/admin", async (req, res) => {
    const user = await User.findById(req.user.userId);
    try {
        res.status(200).json({
            success: true,
            message: "welcome to admin panel!",
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (err) {
        console.error(err.message);
    }
})

// Register route----------------
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check validation
        if (!name || !email || !password) {
            return res.status(401).json({
                success: false,
                message: "All fields are require!",
            })
        };
        // normalizedEmail
        const normalizedEmail = email.trim().toLowerCase();

        // check if user already exists
        const user = await User.findOne({
            email: normalizedEmail
        });
        if (user) {
            return res.status(409).json({
                success: false,
                message: "User already exists with this email"
            })
        };

        // password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        // user registered successfully
        const savedUser = await User.create({
            name,
            email: normalizedEmail,
            password: hashedPassword
        });

        // Generate jwt token
        const token = jwt.sign(
            {
                userId: savedUser._id,
                role: savedUser.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        // response send
        res.status(201).json({
            success: true,
            message: "User registered successfully🎉",
            user: {
                name: savedUser.name,
                email: savedUser.email,
                role: savedUser.role
            }
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong!",
            error: err.message
        })
    }
});

// login
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // check validation
        if (!email || !password) {
            return res.status(401).json({
                success: false,
                message: "email or password are required!"
            })
        };

        // normalized email
        const normalizedEmail = email.trim().toLowerCase();

        // if user is not exist
        const user = await User.findOne({
            email: normalizedEmail
        })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not exist with this email!"
            })
        };

        // compare password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );
        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "incorrect password!"
            })
        };

        // Generate jwt token
        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        // cookies send
        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        // login successful
        res.status(200).json({
            success: true,
            message: "login successful🎉",
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong!",
            error: err.message
        })
    }
});

// logout route
app.get("/logout", (req, res) => {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV,
        sameSite: "lax"
    });
    res.status(200).json({
        success: true,
        message: "logout successfull!🎉"
    })
});

//LISTENING PORT-----------------
app.listen(PORT, () => {
    console.log(`🤖 The app is listening on PORT ${PORT} ✓`);
})
// ------------------ ROUTES ---------------------------------