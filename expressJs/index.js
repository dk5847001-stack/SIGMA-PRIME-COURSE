const express = require("express");
const app = express();

let  port = 3000;
app.listen(port, ()=>{
    console.log(`The app is listen port ${port}`);
})

app.get("/", ((req, res)=>{
res.send("currently you're on the root path")    
}));
app.get("/apple", ((req, res)=>{
res.send("currently you're on the apple page")    
}));
app.get("/banana", ((req, res)=>{
res.send("currently you're on the banana page")    
}));

app.post("/", (req, res)=>{
    res.send("You send a post request");
})
// app.get("*", (req, res) => {
//   res.status(404).send("The page doesn't exist!");
// });


// app.use((req, res)=>{
//     console.log("request received!");
//     // res.send("This response for demo purpose!")
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li><li>Banana</li></ul>";
//     res.send(code);

    // res.send({
    //     name: "Apple",
    //     color: "red",
    //     price: "232 rupees!"
    // })
// })
