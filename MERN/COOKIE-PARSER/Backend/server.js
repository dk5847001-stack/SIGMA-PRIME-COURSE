require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/authMiddleware");
const app = express();

// middleware
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);
app.use(express.json());
app.use(cookieParser());

// Test Route
app.get("/", (req, res)=>{
    res.json({
        success: true,
        mssage: "Cookie Parser Server is running!"
    });
});

// cookie create
app.get("/set-cookie", (req, res)=>{
    res.cookie("name", "Dilkhush", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000
    });

    res.json({
        success: true,
        message: "Cookie created successfully!"
    });
});

// Read cookie
app.get("/get-cookie", (req, res)=>{
    console.log(req.cookies);
    res.json({
        success: true,
        cookies: req.cookies.name
    })
})

// Delete cookie
app.get("/delete-cookie", (req, res)=>{
    res.clearCookie("accessTokenName", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    });
    res.json({
        success: true,
        message: "logout successful!"
    })
});

app.post("/login", async (req, res)=>{
    try{
        const {name, password} = req.body;
        if(!name || !password){
            return res.status(401).json({
                success: false,
                message: "name and password are required!"
            })
        };
        if(name !== "Dilkhush" || password !== "123456"){
            return res.status(401).json({
                success: false,
                message: "Invalid name or password"
            })
        };

        const token = jwt.sign(
            {
                name: name
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )

        // create cookie
        res.cookie("accessTokenName", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        })

        res.status(200).json({
            success: true,
            message: "login successful!"
        })

    }catch(err){
        console.log(err)
    }
});

app.get("/profile", authMiddleware, (req, res)=>{
    const name = req.user.name;
    if(!name){
        return res.json({
            success: false,
            message: "please login first!"
        })
    };

    res.json({
        success: true,
        message: "welcome to your profile",
        name: req.user.name
    })
})

app.listen(process.env.PORT, ()=>{
    console.log(`The server is runnig on port ${process.env.PORT}`);
});

