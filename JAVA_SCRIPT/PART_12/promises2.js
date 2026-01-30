function dataBase(data){
    return new Promise((resolve, reject)=>{
        let internateSpeed = Math.floor(Math.random() * 10 ) + 1;
        if(internateSpeed > 4){
            resolve("success: Data saved!");
        } else{
            reject("failure: weak connection!");
        }
    })
}
console.log(dataBase("Dilkhush"))