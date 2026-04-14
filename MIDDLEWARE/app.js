const express = require("express");
const ExpressError = require("./ExpressError");
const app = express();
const PORT = 3000;

// app.use((req, res, next)=>{
//     let {query} = req.query;
//     console.log(query);
    
//     console.log('Hi i am 1st middleware');
//     next();
// });
// app.use((req, res, next)=>{
//     console.log('Hi i am 2nd middleware');
//     next();
// });

// logger middleware
// app.use((req, res, next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.time);
//     return next()
// })

// ========================================================
const checkToken =  ("/api", (req, res, next)=>{
    const {token} = req.query;
    if(token == "giveaccess"){
        return next()
    }
    throw new ExpressError(401, "ACCESS DENIED!");
});

app.get("/api", checkToken, (req, res)=>{
    res.send("you hvae permit to access my data!")
})
// ========================================================
app.get("/error", (req, res)=>{
    abc = abc;
})
// error handling middleware
app.use((err, req, res, next)=>{
  let {status, message} = req.err;
    res.status(status).send(message);
})

app.use("/random", checkToken, (req, res, next)=>{
    console.log('I am middleware only random');
return next();
})

app.get("/", (req, res)=>{
    res.send("Hi i am root page")
});

app.get("/random", (req, res)=>{
    res.send("Hi i am random page")
})
app.use((req, res)=>{
    res.send("page not found!")
})

app.listen(PORT, ()=>{
    console.log(`The app is listening on PORT ${PORT}`);
})