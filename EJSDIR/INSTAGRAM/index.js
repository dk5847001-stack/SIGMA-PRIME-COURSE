const express = require("express");
const app = express();
const port = 3000;

// app.use(express.static("public"));
const path = require("path");
app.use(express.static(path.join(__dirname, "public/css")))
app.use(express.static(path.join(__dirname, "public/js")))


app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
})
app.get("/ig/:username", (req, res) => {
  // let followers = ["Roshan", "Amar", "Raja", "Shivam", "Pujesh", "Ohmdev"];
  // let {username} = req.params;
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  console.log(data);
  if (data) {
    res.render("instagram.ejs", { data });
  } else{
    res.render("err.ejs");
  }


  // res.render("instagram.ejs", {username, followers})
})
app.listen(port, () => {
  console.log(`The app is listening port no ${port}`);
})
