
// Question number => 1.
const arrayAverage = (arr) =>{
    let total = 0;
    for(let number of arr){
        total += number;
    }
    return total / arr.length;
};
let arr = [10,20,30,40];
console.log(arrayAverage(arr));
