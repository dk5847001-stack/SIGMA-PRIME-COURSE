let arr = [10,20,30,4,6,42];
let MinumumNumber = arr.reduce((min, num)=>{
    if(min < num){
        return min;
    } else{
        return num;
    }
});
console.log("Minimum number in the array is : ", MinumumNumber);
