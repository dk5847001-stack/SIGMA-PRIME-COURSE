const multiply = (a,b)=>(a*b);
console.log(multiply(3,5));
console.log('');

let id = setInterval(()=>{
    console.log("Dilkhush Kumar");
    
},1000);
setTimeout(()=>{
    clearInterval(id)
    console.log('clearInterval run!');
    
}, 5000);
