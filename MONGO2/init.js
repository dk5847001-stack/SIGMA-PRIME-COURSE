const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(()=>{
console.log('connection successful!');
})
.catch((err)=>{
    console.log(err);
});


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
    {
        from: "payal",
        to: "preeti", 
        msg: "send me notes for the expam",
        created_at: new Date(),
    },
    {
        from: "payal",
        to: "preeti", 
        msg: "send me notes for the expam",
        created_at: new Date(),
    },
    {
        from: "payal",
        to: "preeti", 
        msg: "send me notes for the expam",
        created_at: new Date(),
    },
    {
        from: "monu",
        to: "soni", 
        msg: "send the expam paper",
        created_at: new Date(),
    },
    {
        from: "Dilkhush",
        to: "Roshan", 
        msg: "send me money",
        created_at: new Date(),
    },
    {
        from: "Amar",
        to: "Dilkhush", 
        msg: "please help me papa",
        created_at: new Date(),
    },
];

Chat.insertMany(allchats);

// chat1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })