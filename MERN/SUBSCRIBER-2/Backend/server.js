const express = require("express");
const cors = require("cors");

const DB = require("./config/dbConfig");
const subscriberRoute = require("./routes/subscriberRoute");
const PORT = 3000;

const app = express();


// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());
app.use(express.json());

app.use("/api/subscribers", subscriberRoute);

// ===============================
// HOME / HEALTH CHECK
// ===============================

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is working! ✓"
    });
});


// ===============================
// CREATE SUBSCRIBER
// ===============================



// ===============================
// GET ALL SUBSCRIBERS
// ===============================



// ===============================
// GET SINGLE SUBSCRIBER
// ===============================



// ===============================
// UPDATE SUBSCRIBER
// ===============================



// ===============================
// DELETE SUBSCRIBER
// ===============================



// ===============================
// START SERVER AFTER DB CONNECT
// ===============================

const startServer = async () => {

    try {

        await DB();

        app.listen(PORT, () => {
            console.log(`🤖 Server running on PORT ${PORT}`);
            console.log(`👉 http://localhost:${PORT}`);
        });

    } catch (err) {

        console.error("❌ Server startup failed:", err.message);

    }
};

startServer();