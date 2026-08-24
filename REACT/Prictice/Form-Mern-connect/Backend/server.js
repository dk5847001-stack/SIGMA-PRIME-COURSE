const express = require("express");
const cors = require("cors");
const { mongo, default: mongoose } = require("mongoose");
const User = require("./models/User");
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

connectDb();
async function connectDb() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/FormDB")
        console.log("MONGODB CONNECTED SUCCESSFULLY🧨")
    } catch (err) {
        console.log(err)
    }
};

app.get("/", (req, res) => {
    res.send("api is working!")
});

app.post("/api/users", async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = new User({
            name,
            email,
            age
        });
        const savedUser = await newUser.save();
        res.status(201).json({
            message: "user saved successfully!",
            user: savedUser
        });
    } catch (err) {
        res.status(500).json({
            message: "something wend wrong!",
            error: err.message
        })
    }
});

app.get("/api/users", async (req, res)=>{
    try{
    const users = await User.find();
    res.status(201).json(users)
    }catch(err){
        res.status(500).json({
            message: "something went wrong!",
            error: err.message
        })
    }    
})

app.listen(PORT, () => {
    console.log(`🙋‍♀️ The server is running on PORT : ${PORT}`)
})
