const mongoose = require('mongoose');

main()
.then(()=>{
    console.log('connection successful');
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.deleteMany({name: "Dipika"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

// User.findOneAndDelete({name: "Dipika"})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findByIdAndDelete("69956b0c80325b2a5a21f660")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.deleteMany({name: "Monu"})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.deleteOne({name: "Tony"}, {new: true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// User.findByIdAndUpdate("6995694ea63a36ef36e2da18", {age: 250}, {new: true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
// User.find({name: "Tony"})
// .then((res)=>{
//     console.log(res);
// })

// User.findOneAndUpdate({name: "Tony"}, {age: 150}, {new: true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
// User.find({name: "Tony"})
// .then((res)=>{
//     console.log(res);
// })

// const User = mongoose.model("User", userSchema);

// User.updateMany({name: "Tony"}, {age: 100})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
// User.find({name: "Tony"})
// .then((res)=>{
//     console.log(res);
// })

// User.findOne({_id: '6995694ea63a36ef36e2da18'})

// User.findById('6995694ea63a36ef36e2da18')
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name: "Tony", email: "any@gmail.com", age: 23},
//     {name: "Monu", email: "monu@gmail.com", age: 13},
//     {name: "Monu", email: "monu@gmail.com", age: 13},
//     {name: "Monu", email: "monu@gmail.com", age: 13},
//     {name: "Monu", email: "monu@gmail.com", age: 13},
//     {name: "Monu", email: "monu@gmail.com", age: 13},
//     {name: "Dipika", email: "dipika@gmail.com", age: 63}
// ]);

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahooo.in",
//     age: 34,
// });
// user2.save();

// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahooo.in",
//     age: 24,
// });
// user2.save()
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });