const mongoose = require("mongoose");
const express = require("express");
const app = express();

connectDB();
async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/SubscriberDB");
        console.log("👉👉 MONGODB CONNECTED SUCCESSFULLY! ✓")
    } catch (err) {
        console.log("MONGODB ERROR, ", err)
    }
}

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "api is working!"
    })
});

module.exports = connectDB;