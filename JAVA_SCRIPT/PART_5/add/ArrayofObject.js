let classInfo = [
    {
        name: "Dilkhush Kumar",
        Grade: "A",
        City: "Madhepura"
    },
    {
        name: "Amar Kumar",
        Grade: "O",
        City: "Bhagalpur"
    },
    {
        name: "Roshan Kumar",
        Grade: "A++",
        City: "Delhi"
    }
]
console.log("Origional object : ", classInfo);
console.log('Accessing the object...');
console.log(classInfo[0]);
console.log(classInfo[0].City = "Patna");
console.log(classInfo[0].gender = "Male");
console.log('delating the object...');
delete classInfo[1]
console.log(classInfo);




