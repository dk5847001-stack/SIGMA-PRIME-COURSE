let arr = [1,2,4,2,42,4343,53,5,5];
let large = 0;
for(let i = 0; i <arr.length; i++){
    if(large<arr[i]){
        large = arr[i]
    }
}
console.log(large);
