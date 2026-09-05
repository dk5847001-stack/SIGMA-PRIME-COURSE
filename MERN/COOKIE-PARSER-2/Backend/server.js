require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const connectDB = require("./config/dbConfig");
const User = require("./models/User");
const loginRateLimiter = require("./middleware/loginRateLimiter");
const signupRateLimiter = require("./middleware/signupRateLimiter");
const authMiddleware = require("./middleware/authMiddleware");
const adminMiddleware = require("./middleware/adminMiddleware");
const PORT = process.env.PORT || 3000;
const app = express();

// -------------------- MIDDLEWARE --------------------

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
// -------------------- DATABASE --------------------

connectDB();

// -------------------- HOME ROUTE --------------------

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "api is working!"
    });
});

// -------------------- AUTH ROUTE --------------------
app.get("/api/profile", async (req, res)=>{
    const user = await User.findById(req.user.userId);
    console.log(req.user);
    res.status(200).json({
        success: true,
        message: "welcome to your profile!",
        user: {
            name: user.name,
            email: user.email,
            role: user.role
        }
    })
})

// -------------------- ADMIN ROUTE -------------------
app.get("/admin/deshboard", (req, res)=>{
    res.status(200).json({
        success: true,
        message: "Hello admin, you can access and manage all users!"
    })
})

// -------------------- LOGOUT ROUTE ------------------
app.get("/logout", (req, res)=>{
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    })
    res.status(200).json({
        success: true,
        message: "logout successfylly!"
    })
})

// -------------------- SIGNUP ROUTE --------------------

app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation check
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        // Normalize email
        const emailNormalized = email.trim().toLowerCase();

        // Check if user already exists
        const user = await User.findOne({
            email: emailNormalized
        });

        if (user) {
            return res.status(409).json({
                success: false,
                message: "User already exists with this email"
            });
        }

        // Password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const savedUser = await User.create({
            name,
            email: emailNormalized,
            password: hashedPassword
        });

        // -------------------- GENERATE JWT --------------------

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

        // -------------------- SET COOKIE --------------------

        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        // -------------------- RESPONSE --------------------

        return res.status(201).json({
            success: true,
            message: "User registered successfully!",
            user: {
                name: savedUser.name,
                email: savedUser.email,
                role: savedUser.role
            }
        });

    } catch (error) {
        console.error("Signup Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

// -------------------- LOGIN ROUTE ---------------
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation check
        if(!email || !password){
            return res.status(401).json({
                success: false,
                message: "All fields are required!"
            })
        };

        // normalizedEmail
        const normalizedEmail = email.trim().toLowerCase();

        // if user is not exists
        const user = await User.findOne({
            email: normalizedEmail
        })
        if(!user){
            return res.status(401).json({
                success: false,
                message: "user is not registered yet with this email!"
            })
        };

        // compare password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );
        if(!isPasswordCorrect){
            return res.status(401).json({
                success: false,
                message: "Invalid password, please try again"
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

        // create cookie
        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        // response send
        res.status(200).json({
            success: true,
            message: "user logged in successfully!",
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "something went wrong!",
            error: err.message
        })
    }
})

// -------------------- SERVER --------------------

app.listen(PORT, () => {
    console.log(`🤖 The server is running on port ${PORT} ✓`);
});
