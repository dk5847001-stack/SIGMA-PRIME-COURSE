const express = require("express");
const { register } = require("module");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, password } = req.query
    // res.send("Your request accepted! on get");
    res.send(`Welcome ${user}, your password is : ${password}`);
});
app.post("/register", (req, res) => {
    let {user, password} = req.body;
    // res.send("Your request accepted! on post")
    res.send(`Welcome ${user}, your password is : ${password}`);
});

app.listen(port, () => {
    console.log(`The app is listening on port ${port}`);
});
