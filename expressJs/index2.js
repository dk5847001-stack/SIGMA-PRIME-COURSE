const express = require("express");
const app = express();
let prot = 3001;
app.listen(prot, ()=>{
    console.log(`The app is listening port no ${prot}`);
});
app.get("/", (req, res)=>{
    res.send("you are on the root page")
});
app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.params;
    // console.log(req.params);
    let htmlstr = `<h1>hello, welcome to the @${username} and pass:${id}</h1>`
    res.send(htmlstr)
});

app.get("/search", (req, res)=>{
    // console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send(`<h1>NOthing search</h1>`)
    }
    let htmlstr = `<h1>Search Results <ul><li>${q}</li></ul></h1>`
    res.send(htmlstr)
});