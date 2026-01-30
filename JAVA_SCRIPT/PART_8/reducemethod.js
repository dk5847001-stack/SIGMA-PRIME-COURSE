let arr = [2,3,2,4,6,7,4,6,4,5,12,3,2,3,2];
let max = -1;
for(let i = 0; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log("Without reducing function : " , max);
console.log('---------------------');
let ans = arr.reduce((max, el)=>{
if(max < el){
    return el;
} else{
    return max;
}
})
console.log('By reducing function : ', ans);


