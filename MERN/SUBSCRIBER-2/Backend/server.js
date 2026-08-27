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

app.post("/api/subscribers", async (req, res) => {
    try {
        const { email } = req.body;
        const fetchEmail = await Subscriber.findOne({ email });
        if (fetchEmail) {
            return res.status(409).json({
                message: "This email is already subscribed! ✓"
            })
        }
        const newEmail = new Subscriber({
            email
        });
        const savedEmail = await newEmail.save();
        console.log(savedEmail);
        res.status(200).json({
            message: "you subscribed successfully ✓",
            email: savedEmail
        });
    } catch (err) {
        res.status(500).json({
            message: "something went wrong!",
            error: err.messge
        })
    }
});

app.get("/api/subscribers", async (req, res) => {
    try {
        let fetchEmail = await Subscriber.find().sort({ _id: -1 });
        console.log(fetchEmail);
        res.status(200).json({
            message: "subscriber fetched successfully!",
            email: fetchEmail
        })
    } catch (err) {
        res.status(500).json({
            message: "something went wrong!",
            error: err.message
        })
    }
});

app.get("/api/subscribers/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let singleSubscriber = await Subscriber.findById(id);
        res.status(200).json({
            message: "subscriber fetched successfully!",
            subscriber: singleSubscriber
        });
        console.log(singleSubscriber);
    } catch (err) {
        res.status(500).json({
            message: "something went wrong!",
            error: err.message
        })
    }
});

app.put("/api/subscribers/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let {email} = req.body;
        let updateSubscriber = await Subscriber.findByIdAndUpdate(id,
            {email}
        );
        console.log(updateSubscriber);
        res.status(200).json({
            message: "subscriber updated successfully!",
            subscriber: updateSubscriber
        })
    } catch (err) {
        res.status(500).json({
            message: "something went wrong!",
            error: err.message
        })
    }
})

app.delete("/api/subscribers/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteSubscriber = await Subscriber.findByIdAndDelete(id);
        console.log(deleteSubscriber);
        res.status(200).json({
            message: "subscriber deleted successfully!",
            subscriber: deleteSubscriber
        })
    } catch (err) {
        res.status(500).json({
            message: "something went wrong!",
            error: err.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`🤖🤖 The app is listening on PORT ${PORT}`);
})