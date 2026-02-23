// let sum = (a,b)=>{
// console.log(`sum of the ${a} and ${b} is : ${a+b}`);
// console.log(`squre of the ${a} and ${b} is : ${a**b}`);
// console.log(`average of the ${a} and ${b} is : ${(a+b)/2}`);
// }
// sum(4,5);
let nums = [2,5,4,6,4,6];
console.log('origional array : ', nums);

let squre = nums.map((el) => el * el);
console.log("Squared numbers:", squre);
let sum = nums.reduce((sum, el)=> sum + el, 0);
console.log("Sum of numbers:", sum);
let average = sum / nums.length;
console.log('Average of numbers:', average);

