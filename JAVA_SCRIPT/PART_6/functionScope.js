console.log('Function Scope -----------------------------------');
let sum = 54; //Global Scope
function CalcSum(a,b){
    let sum = a + b; // Function Scope
    return sum;
}
let a = CalcSum(2,3);
console.log(a);
console.log('');

console.log('Block Scope --------------------------------------');
let age =5;
if(age<18){
    let str = "Not Adult"
    console.log(str); // Working
    
}
// console.log(str); // Not Wrrking

console.log('');
console.log('Lexical Scope ----------------------------------');

function OuterFunc(){
    let a = 4; 
    let b = 3;
    function InnerFunc(){
        console.log(a);
        console.log(b);
        let c = 5;
    }
    InnerFunc();
    // console.log(c); Not Working
    
}
OuterFunc();
// InnerFunc(); Not Working


