function dataBase(data){
    return new Promise((resolve, reject)=>{
        let internateSpeed = Math.floor(Math.random()*10) + 1;
        if(internateSpeed > 4){
            resolve();
        } else{
            reject();
        }
    })
}
dataBase("Dilkhush Kumar")
.then(()=>{
    console.log('success: Data saved!');
    return dataBase("Amar Kumar");
})
.then(()=>{
    console.log('success2: Data saved!');
    return dataBase("Roshan Kumar");
})
.then(()=>{
    console.log('success3: Data saved!');
    
})
.catch(()=>{
    console.log('failure: weak connection!');
    
})