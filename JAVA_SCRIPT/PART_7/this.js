const student = {
    name: "Dilkhush Kumar",
    age: 18,
    eng: 90,
    phy: 89,
    math:  78,
    getAvg(){
        let avg = (this.eng + this.phy + this.math)/3;
        console.log(`${this.name} got average marks is : ${Math.floor(avg)}`);
    }
}
student.getAvg()
