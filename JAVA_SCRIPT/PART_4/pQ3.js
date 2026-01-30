let number = 23242;
let sum = 0;
let copy = number;
while(copy > 0){
    let digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy/10);
}
console.log(sum);
