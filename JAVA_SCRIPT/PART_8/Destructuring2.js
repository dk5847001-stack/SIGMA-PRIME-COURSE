const student = {
    name: "Dilkhush",
    age: 14,
    class: 9,
    subject: ["Hindi", "English", "meth", "seience"],
    password: "abcd",
    username: "dilkhush14"
}
let {username: user, password, secret, city = "Unknown"} = student;
console.log("user : ", user)
console.log("password : ", password)
console.log("secret : ", secret)
console.log("city : ", city);
