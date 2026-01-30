
let start = 100;
let end = 200;
function generateRandomNumber(start, end){
    let diff= end - start;
   return Math.floor(Math.random()*diff) + start;
}
console.log(generateRandomNumber(start,end));
