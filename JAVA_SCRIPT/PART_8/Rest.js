let sum = function(...args){
    for(let i = 0; i<args.length; i++){
        console.log(args[i]);
    }
}
console.log(sum(1,2,3,4,5,6,7,8,9));
console.log('');
function min(){
    console.log(arguments);
    console.log("Length of Arguments : ", arguments.length);
}
min(1,2,3,4,5,6,7,8,9);

