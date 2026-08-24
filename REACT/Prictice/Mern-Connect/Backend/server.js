const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res)=>{
    res.send("hello gyes welcome back!")
});

app.get("/api/users", (req, res)=>{
    res.json([
        {
            id: 123,
            name: "Dilkhush Kumar"
        },
        {
            id: 698,
            name: "Roshan Kumar"
        },
        {
            id: 799,
            name: "Amar Kumar"
        },
        {
            id: 678,
            name: "Pujesh Kumar"
        }
    ])
});

app.get("/api/student", (req, res)=>{
    res.json({
        name: "Dilkhush Kumar",
        email: "dk5847001@gmail.com",
        branch: "B.Tech cse",
        semester: 5
    });
});

app.listen(PORT, ()=>{
    console.log(`The app is listening on PORT ${PORT}`)
})