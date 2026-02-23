class Persons{
    constructor(name, age){
        console.log('parent class constructor');
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hey! I'm ${this.name}`);
    }
}

class Student extends Persons{
    constructor(name, age, marks){
        console.log('student class constructor');
        super(name, age); // parent class constructor is being called
        this.marks = marks;
    }
}

class Teacher extends Persons{
    constructor(name, age, subject){
        console.log('teacher class constructor');
        
        super(name, age); // parent class constructor is being called
        this.subject = subject;
    }
}