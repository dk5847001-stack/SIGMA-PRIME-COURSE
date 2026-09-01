require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/authMiddleware");
const adminMiddleware = require("./middleware/adminMiddleware");
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "api is working"
    })
});

app.get("/protected", authMiddleware, (req, res)=>{
    res.status(200).json({
        success: true,
        message: "Access protected route",
    })
});

// admin route
app.get("/admin", authMiddleware, adminMiddleware, (req, res)=>{
    res.status(200).json({
        success: true,
        message: "Access admin route"
    });
});

// --------------------- REGISTER ROUTE -------------------
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // validation check
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "all fields are require!"
            })
        };

        // check existing user
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({
                success: false,
                message: "user already exist!"
            })
        };

        // hashed password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Registeration successful
        const savedUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // jwt token generate
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
        console.log(savedUser);
        res.status(201).json({
            success: true,
            message: "user registered successfully!",
            token,
            user: {
                name: savedUser.name,
                email: savedUser.email,
                role: savedUser.role
            }
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "somethig went wrong!",
            error: err.message
        })
    }
});

// ----------------- LOGIN ROUTE ---------------------
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation check
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are require!"
            })
        };

        // check existing user
        const normalizedEmail  = email.trim().toLowerCase();
        const user = await User.findOne({ email: normalizedEmail  });
        if (!user) {
            return res.status(401).json({
                message: "This email is not registered yet in our website!"
            })
        };

        // compare password 
        const isCorrectPassword = await bcrypt.compare(
            password,
            user.password
        );
        if (!isCorrectPassword) {
            return res.status(401).json({
                message: "Invalid password!"
            })
        };

        //  Generate token
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

        // login successful
        res.status(200).json({
            success: true,
            message: "login successful",
            token,
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "somethig went wrong!",
            error: err.message
        })
    }
});

app.listen(PORT, () => {
    console.log(`🤖 The app is working on port ${PORT} ✓`);
})