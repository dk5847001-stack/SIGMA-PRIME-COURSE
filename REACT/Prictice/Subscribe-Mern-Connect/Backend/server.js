const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Subscriber = require("./models/Subscriber");
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

connectDb();
async function connectDb() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Subscriber");
        console.log("🫷👉👉MONGODB CONNECTED SUCCESSFULLY!🧜‍♂️🧜‍♂️🫸")
    } catch (err) {
        console.log("Mongodb error : ", err)
    }
}

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API is working!",
        statusCod: 200
    })
});

app.post("/api/subscribers", async (req, res) => {
    const { subscriber } = req.body;
    try {
        const newSubscriber = new Subscriber({
            subscriber
        });
        const savedSubscriber = await newSubscriber.save();
        console.log(savedSubscriber);

        res.status(201).json({
            message: "Subscriber added successfully!",
            subscriber: savedSubscriber
        });
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong!",
            error: err.message
        });
    }

});

app.listen(PORT, () => {
    console.log(`👉🙋‍♀️ The app is running on PORT: https://localhost:${PORT}`)
})