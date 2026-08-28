require("dotenv").config()
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const connectDB = require("./config/dbConfig");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/authMiddleware");
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "api is working!"
    })
});

// Register Route
app.post("/api/auth/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // validation check
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "all filds aur require"
            })
        };
        // check axisting user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "user already axist!"
            })
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).json({
            success: true,
            message: "user registered successfully!",
            user: newUser
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "server error",
            error: err.message
        })
    }
});

// login Route
app.post("/api/auth/login", async (req, res)=>{
    try{
        const {email, password} = req.body;
        // validation check
        if(!email || !password){
            return res.status(400).json({
                message: "email and password are required!"
            })
        };
        // check existing user
        const existUser = await User.findOne({email});
        if(!existUser){
            return res.status(401).json({
                message: "invalid email or password"
            })
        };
        // password compare
        const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
        if(!isPasswordCorrect){
            return res.status(401).json({
                message: "invalid email or password"
            });
        }
        // generate jwt token
        const token = jwt.sign(
            {
                userId: existUser._id,
                email: existUser.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        // login successfully
        res.status(200).json({
            success: true,
            message: "login successfull",
            token,
            user: existUser
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "server error",
            error: err.message
        })
    }
});

app.get("/api/admin", authMiddleware, (req, res)=>{
    try{
        res.status(200).json({
            success: true,
            message: "welcome to admin panel",
            user: req.user
        })
    }catch(err){
        console.log(err.message)
    }
})

app.listen(PORT, () => {
    console.log(`👉 The app is listening on port ${PORT}`);
})