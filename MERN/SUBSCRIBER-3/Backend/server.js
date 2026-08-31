const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig");
const subscriberRoute = require("./routes/subscriberRoute");
const authMiddleware = require("./middleware/authMiddleware");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "api is working"
    });
});

app.get("/protected", authMiddleware, (req, res)=>{
    try{
        res.status(200).json({
            success: true,
            message: "access protected route"
        })
    }catch(err){
        res.status(401).json({
            success: false,
            message: "not permition",
            err: err.message
        })
    }
})

app.use("/api/subscribers", subscriberRoute);

// ----------------------------------------- AUTH ROUTE ----------------------------------------

app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check required fields
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        // Check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists!"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully!",
            user
        });

    } catch (err) {
        console.error("Signup Error:", err);

        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err.message
        });
    }
});

// ----------------------------------------- LOGIN ROUTE ----------------------------------------

app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        // Check required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        // Find user
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "Invalid email or password!"
            });
        }

        // Compare password
        const isCorrectPassword = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!isCorrectPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password!"
            });
        }

        // Generate jwt
        const token = jwt.sign(
            {
                userId: existingUser._id,
                role: existingUser.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        // Login successful
        res.status(200).json({
            success: true,
            message: "Login successful!",
            token,
            user: {
                id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email,
                role: existingUser.role
            }
        });

    } catch (err) {

        console.error("Login Error:", err);

        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err.message
        });
    }
});
// ----------------------------------------- AUTH ROUTE ----------------------------------------

app.listen(PORT, () => {
    console.log(`🤖 The app is listening on PORT ${PORT} ✓`);
})
