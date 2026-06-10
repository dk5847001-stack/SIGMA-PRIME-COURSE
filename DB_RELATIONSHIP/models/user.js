const mongoose = require("mongoose");
const schema = mongoose.Schema;
main().then(()=>{
    console.log('mongodb connected successful');
})
.catch(err=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationships");
}

const userSchema = new schema({
    name: String,
    adderss: [
        {
            _id: false,
            location: String,
            city: String,
        }
    ],
})

const User = mongoose.model("User", userSchema);

const addUser = async()=>{
    const user1 = new User({
        name: "john Donne",
        adderss: [
            {
                location: "street 1",
                city: "New York",
            }
        ]
    });
    user1.adderss.push({
        location: "street 2",
        city: "Los Angeles",
    });
    await user1.save();
    console.log(user1);
}
addUser();