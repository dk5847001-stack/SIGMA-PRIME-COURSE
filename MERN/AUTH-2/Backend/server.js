require("dotenv").config();
const express = require("express");
const connectDB = require("./config/dbConfig");
const User = require("./models/User");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/authMiddleware");
const adminMiddleware = require("./middleware/adminMiddleware");
const signupRateLimit = require("./middleware/signupRateLimit");
const loginRateLimit = require("./middleware/loginRateLimit");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/signup", signupRateLimit);
app.use("/login", loginRateLimit);

connectDB();

app.get("/", authMiddleware, (req, res) => {
    res.status(200).json({ message: "Welcome to the Authentication API" });
});

app.get("/admin",
    authMiddleware,
    adminMiddleware,
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "access admin route"
        })
    })

//------------------------------------------------- Register Route --------------------------------------------
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // validation check
        if (!name || !email || !password) {
            return res.status(401).json({
                message: "All fields are required!"
            })
        };

        // normalize the email
        const normalizedEmail = email.trim().toLowerCase();

        // ceck if user already exists
        const user = await User.findOne({
            email: normalizedEmail
        });
        if (user) {
            return res.status(401).json({
                message: "User already exists with this email!"
            })
        }

        // password validation
        if (password.length < 6 || password.length > 20) {
            return res.status(401).json({
                message: "Password must be between 6 and 20 characters long!"
            })
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user
        const savedUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        console.log("✅ User registered successfully ✓", savedUser);

        // Generate JWT token
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

        // user registration successful
        res.status(201).json({
            success: true,
            message: "User registered successfully!",
            token,
            user: {
                name: savedUser.name,
                email: savedUser.email,
                role: savedUser.role
            }
        });

    } catch (err) {
        res.status(500).json({
            message: "something went wrong",
            error: err.message
        })
    }
});

// ------------------------------------------------- Login Route --------------------------------------------
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation check
        if (!email || !password) {
            return res.status(401).json({
                message: "Please provide both email and password!",
            })
        };

        // normalize the email
        const normalizedEmail = email.trim().toLowerCase();

        // check if user exists
        const user = await User.findOne({
            email: normalizedEmail
        });
        if (!user) {
            return res.status(401).json({
                message: "This email is not registered! Please sign up first.",
            })
        };

        // compare the provided password with the hashed password in the database
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid password! Please try again.",
            })
        };

        // Generate JWT token
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

        // user login successful
        res.status(200).json({
            success: true,
            message: "User logged in successfully!",
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (err) {
        res.status(500).json({
            message: "something went wrong",
            error: err.message
        })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`🤖 Server is running on port ${process.env.PORT} ✓`);
})