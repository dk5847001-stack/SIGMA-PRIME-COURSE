const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res)=>{
    // res.send("this is root")
    res.render("home.ejs");
});
app.get("/apple", (req, res)=>{
    res.send("This is apple page");
});
app.get("/roldice", (req, res)=>{
    let dice = Math.floor(Math.random() * 6) + 1;
    res.render("roldice.ejs", {dice});
});

app.listen(port, ()=>{
    console.log(`The app is listening port no : ${port}`);
});