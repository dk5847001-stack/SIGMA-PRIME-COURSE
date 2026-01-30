let arr = [1,3,5,7,8,2,12,24,6];
let n = 5;
function largerThanANumber(arr,n){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>n){
            console.log(arr[i]);
        }
    }
}
largerThanANumber(arr,n)