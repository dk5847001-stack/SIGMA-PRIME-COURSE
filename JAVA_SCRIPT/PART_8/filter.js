let arr = [3,4,4,6,4,3,3,7,8,4,1,5,7,9,7];
let evenNumber = arr.filter((el)=>{
    return el%2==0;
})
console.log("Even Number : ", evenNumber);
console.log('');
let oddNumber = arr.filter((el)=>{
    return !(el%2==0);
});
console.log("Odd Number : ", oddNumber);

