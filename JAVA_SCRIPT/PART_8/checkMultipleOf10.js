let arr = [10,20,30,40,50,60,70,85,90,100,110];
let array = [10,20,30,40,50,60];
let newArr = arr.every((el) => el %10 ==0);
let secondArr = array.every((el)=> el%10 == 0);
console.log("for second array : ",secondArr);

console.log("for first array : ",newArr);
