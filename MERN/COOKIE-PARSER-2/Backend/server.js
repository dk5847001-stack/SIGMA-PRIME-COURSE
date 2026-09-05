require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const helmet = require("helmet");
const connectDB = require("./config/dbConfig");
const User = require("./models/User");
const OTP = require("./models/OTP");
const generateOTP = require("./utils/generateOTP");
const sendOTPEmail = require("./utils/sendOTPEmail");
const {signupSchema, loginSchema, verifyOTPSchema} = require("./validation/userValidation");
const loginRateLimiter = require("./middleware/loginRateLimiter");
const signupRateLimiter = require("./middleware/signupRateLimiter");
const authMiddleware = require("./middleware/authMiddleware");
const adminMiddleware = require("./middleware/adminMiddleware");
const validate = require("./middleware/validate");
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
app.use(helmet());
app.use(cookieParser());
app.use("/signup", signupRateLimiter, validate(signupSchema));
app.use("/login", loginRateLimiter, validate(loginSchema));
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

app.get("/api/auth/check", authMiddleware, async (req, res) => {

    setTimeout(() => {
        res.json({
            success: true,
            user: req.user
        });
    }, 3000); // 3 seconds delay

});

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

        const emailNormalized = email.trim().toLowerCase();

        // Gmail only
        if (!emailNormalized.endsWith("@gmail.com")) {

            return res.status(400).json({
                success: false,
                message: "Only Gmail addresses are allowed!"
            });

        }

        // Check if user already exists
        const existingUser = await User.findOne({
            email: emailNormalized
        });

        if (existingUser) {

            return res.status(409).json({
                success: false,
                message: "User already exists with this email!"
            });

        }

        // Generate OTP
        const otp = generateOTP();

        // Hash password before temporary storage
        const hashedPassword = await bcrypt.hash(password, 10);

        // Remove previous OTP
        await OTP.deleteMany({
            email: emailNormalized
        });

        // OTP expires after 10 minutes
        const expiresAt = new Date(
            Date.now() + 10 * 60 * 1000
        );

        // Save OTP data
        await OTP.create({
            email: emailNormalized,
            name,
            password: hashedPassword,
            otp,
            expiresAt
        });

        // Send OTP email
        await sendOTPEmail(
            emailNormalized,
            name,
            otp
        );

        return res.status(200).json({
            success: true,
            message: "OTP sent successfully to your Gmail!",
            email: emailNormalized
        });

    } catch (error) {

        console.error("Signup OTP Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to send OTP!"
        });
    }
});

// verify route-------------------------------
app.post(
    "/verify-otp",
    validate(verifyOTPSchema),
    async (req, res) => {

        try {

            const { email, otp } = req.body;

            const emailNormalized = email.trim().toLowerCase();

            // Find OTP
            const otpRecord = await OTP.findOne({
                email: emailNormalized
            });

            if (!otpRecord) {

                return res.status(400).json({
                    success: false,
                    message: "OTP not found or expired!"
                });
            }

            // Check expiry
            if (otpRecord.expiresAt < new Date()) {

                await OTP.deleteOne({
                    _id: otpRecord._id
                });

                return res.status(400).json({
                    success: false,
                    message: "OTP has expired. Please request a new OTP!"
                });
            }

            // Maximum attempts
            if (otpRecord.attempts >= 5) {

                await OTP.deleteOne({
                    _id: otpRecord._id
                });

                return res.status(429).json({
                    success: false,
                    message: "Too many incorrect OTP attempts!"
                });
            }

            // Compare OTP
            if (otp !== otpRecord.otp) {

                otpRecord.attempts += 1;

                await otpRecord.save();

                return res.status(400).json({
                    success: false,
                    message: "Invalid OTP!"
                });
            }

            // Create user
            const savedUser = await User.create({
                name: otpRecord.name,
                email: otpRecord.email,
                password: otpRecord.password
            });

            // Delete used OTP
            await OTP.deleteOne({
                _id: otpRecord._id
            });

            // Generate JWT
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

            // Set cookie
            res.cookie("accessToken", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 24 * 60 * 60 * 1000
            });

            return res.status(201).json({
                success: true,
                message: "Email verified and account created successfully!",
                user: {
                    name: savedUser.name,
                    email: savedUser.email,
                    role: savedUser.role
                }
            });

        } catch (error) {

            console.error("Verify OTP Error:", error);

            return res.status(500).json({
                success: false,
                message: "OTP verification failed!"
            });
        }
    }
);

// resend route---------------------
app.post("/resend-otp", async (req, res) => {

    try {

        const { email } = req.body;

        if (!email) {

            return res.status(400).json({
                success: false,
                message: "Email is required!"
            });
        }

        const emailNormalized = email.trim().toLowerCase();

        const otpRecord = await OTP.findOne({
            email: emailNormalized
        });

        if (!otpRecord) {

            return res.status(404).json({
                success: false,
                message: "Signup session not found. Please signup again!"
            });
        }

        const newOTP = generateOTP();

        otpRecord.otp = newOTP;
        otpRecord.attempts = 0;
        otpRecord.expiresAt = new Date(
            Date.now() + 10 * 60 * 1000
        );

        await otpRecord.save();

        await sendOTPEmail(
            emailNormalized,
            otpRecord.name,
            newOTP
        );

        return res.status(200).json({
            success: true,
            message: "New OTP sent successfully!"
        });

    } catch (error) {

        console.error("Resend OTP Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to resend OTP!"
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
