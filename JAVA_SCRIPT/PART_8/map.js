let arr = [1,2,3,4,5];
let squre = arr.map((el)=>{
    return el*el;
});
console.log(squre);
console.log('');
let student = [{
    name: "dk",
    marks: 95
}, {
     name: "sk",
    marks: 85
}, {
     name: "ak",
    marks: 75
}];
let gpa = student.map((el)=>{
    return el.marks/10;
})
console.log(gpa);

