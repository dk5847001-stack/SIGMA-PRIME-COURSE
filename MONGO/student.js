const mongoose = require("mongoose");

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/student");
        console.log("Mongodb connection successfull");

        const studentSchema = new mongoose.Schema({
            name: String,
            branch: String,
            prn: Number,
        });

        const Student = mongoose.model("Student", studentSchema);
        await Student.insertMany
               ([
                {name: "Dilkhush Kumar", branch: "B.Tech CSE", prn: 240205131051},
                {name: "Amar Kumar", branch: "BCA", prn: 240106101223}
                ]).then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
                
    }catch(err){
        console.log(err);
    }
}
main();