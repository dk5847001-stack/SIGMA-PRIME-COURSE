const object = {
    message: "Hellow world!",

    logMessage(){
        console.log(this.message);
        
    }
};
// setTimeout(()=> {
//     object.logMessage()
// }, 1000);
setTimeout(object.logMessage, 1000);