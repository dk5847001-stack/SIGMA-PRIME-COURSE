let sum = function(...args){
return args.reduce((sum, el)=> sum + el);
}
console.log(sum(1,2,3,4,5,6,7,8,9));
console.log('Finding minimum number : ');
let min = function(message, ...args){
    console.log(message);
    console.log(args);
    return args.reduce((min, el)=>{
        if(min > el){
            return el;
        } else {
            return min;
        }
    })
}
console.log(min("Hello!,", 1,2,3,4,5,6,7,8,9));

