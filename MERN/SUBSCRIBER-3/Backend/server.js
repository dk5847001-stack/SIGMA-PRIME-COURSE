const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig");
const subscriberRoute = require("./routes/subscriberRoute");
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

app.use("/api/subscribers", subscriberRoute);

app.listen(PORT, () => {
    console.log(`🤖 The app is listening on PORT ${PORT} ✓`);
})
