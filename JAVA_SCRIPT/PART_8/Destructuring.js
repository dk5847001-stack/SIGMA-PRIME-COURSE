let arr = ["Dilkhush", "Amar", "Akbar", "Anthony", "John", "Doe"];
let [first, second, ...restNames] = arr;
console.log("First Name : ", first);
console.log("Second Name : ", second);
console.log("Rest Names : ", restNames);