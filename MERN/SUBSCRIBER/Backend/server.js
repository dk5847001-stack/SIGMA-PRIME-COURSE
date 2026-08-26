const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Subscriber = require("./models/Subscriber");
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();
async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/SubscriberDB");
        console.log("👉👉MONGODB CONNECTED SUCCESSFULLY!");
    } catch (err) {
        console.log("MONGODB ERROR : ", err);
    }
};

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is working successfully!",
        api: "Subscriber API",
        version: "1.0.0"
    });
});

app.post("/api/subscribers", async (req, res) => {

    try {

        const { email } = req.body;

        // Check email
        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required!"
            });
        }

        // check axistence subscriber
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            console.log("This email is already subscribed!");
            return res.status(409).json({
                success: false,
                message: "This email is already subscribed!"
            })
        }

        // Create subscriber
        const newSubscriber = new Subscriber({
            email: email
        });

        // Save to database
        const savedSubscriber = await newSubscriber.save();

        console.log(savedSubscriber);

        return res.status(201).json({
            success: true,
            message: "Subscriber saved to Database successfully!",
            subscriber: savedSubscriber
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err.message
        });

    }

});

// get Route for subscribers.
app.get("/api/subscribers", async (req, res) => {
    try {
        let allSubscribers = await Subscriber.find();
        console.log(allSubscribers);
    } catch (err) {
        res.status(500).json({
            message: "something went wrong!",
            error: err.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`🥱🥱The app is listening on PORT : https://localhost:${PORT}`);
})

