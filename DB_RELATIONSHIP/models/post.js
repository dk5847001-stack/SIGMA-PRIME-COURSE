const mongoose = require("mongoose");
const Schema = mongoose.Schema;
main().then(() => {
    console.log('mongodb connected successful');
})
    .catch(err => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationships");
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async()=>{
//     const user = await User.findOne({ username: "Dilkhush Kumar"});

//     const post2 = new Post({
//         content: "This is my second post",
//         likes: 20,
//     })
//     post2.user = user;
//     await post2.save();
// }
// addData();

const getData = async()=>{
    const post = await Post.findOne({}).populate("user", "username");
    console.log(post);
}
getData();