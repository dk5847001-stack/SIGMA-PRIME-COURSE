const student = {
    name: "Dilkhush Kumar",
    age: 12,
    prop: this,
    marks: 89,
    getname: function(){
        console.log(this);
        console.log(this.name);
    },
    getmarks: ()=>{
        console.log(this);
        console.log(this.name); //parent's scope => window
    },
    getInfo1: function(){ 
    setTimeout(()=>{
        console.log(this);  //Student
        
    },2000)
},
    getInfo2: function(){ 
    setTimeout(function(){
        console.log(this);   //Window
        
    },2000)
}
}
// student.getname()
// console.log('--------------------------');
// student.getmarks()
student.getInfo1()
console.log('---------------------------');

student.getInfo2()

