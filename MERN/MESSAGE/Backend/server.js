const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Message = require("./models/Message");
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();
async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/MessageDB");
        console.log("👉👉MONGODB CONNECTED SUCCESSFULLY! ✓")
    } catch (err) {
        console.log("MONGODB ERROR : ", err)
    }
}

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "api is working!"
    });
});

app.post("/api/messages", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const allMessage = new Message({
            name,
            email,
            subject,
            message
        });

        const savedMessage = await allMessage.save();

        console.log(savedMessage);

        res.status(201).json({
            success: true,
            message: "Message received successfully!",
            data: savedMessage
        });

    } catch (err) {
        console.log("MESSAGE SAVE ERROR:", err);

        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`📩📩 The app is listening on PORT ${PORT} ✓`);
});