
// ***************** Factory Function *************************

// function personMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hey! my name is ${this.name}`);
//         }
//     }
//     return person;
// }

// ***************** Constructor *************************

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// };

// Person.prototype.talk = ()=>{
//     console.log(`Hey! my name is ${this.name}`);
// }
// let p1 = new Person("Dilkhush", 18);
// console.log(p1);
// let p2 = new Person("Amar", 18);
// console.log(p2);

// ***************** Class method *************************

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hey! may name is ${this.name}`);
    }
}
let p1 = new Person("Dilkhush kumar", 20);
let p2 = new Person("Amar Kumar", 19);
console.log(p1);
console.log(p2);


