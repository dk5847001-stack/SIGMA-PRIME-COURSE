function dataBase(data){
    return new Promise((resolve, reject)=>{
        let internateSpeed = Math.floor(Math.random()*10) + 1;
        if(internateSpeed > 4){
            resolve("Success : Data was saved!");
        } else{
            reject("failure : weak connection!");
        }
    })
}
dataBase("Dilkhush Kumar")
.then((result)=>{
    console.log("Data1 saved!")
    console.log("promises resolved: " + result)
    return dataBase("Amar Kumar");
})
.then((result)=>{
    console.log("Data2 saved!")
    console.log("promises resolved: " + result)
    return dataBase("Roshan KUmar");
})
.then((result)=>{
    console.log("Data3 saved!")
    console.log("promises resolved: " + result)
    
})
.catch((error)=>{
    console.log("failure: weak connection!")
    console.log("promises rejected: " + error);
    
})