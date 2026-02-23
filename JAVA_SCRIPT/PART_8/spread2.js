let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let num = [...odd, ...even];
console.log(num);
console.log('');
let obj = {
    email: "123@gmail.com",
    password: "abcd"
}
let objCopy = {...obj, id: 123, isAdmin: false};
console.log("objCopy:", objCopy);
console.log('');
let arr = [1,2,3,4,5,3,2,2];
let arrCopy = {...arr};
console.log('arrCopy', arrCopy);
console.log('');
let name = "Dilkhush Kumar";
let nameCopy = {...name};
console.log('nameCopy : ', nameCopy);


