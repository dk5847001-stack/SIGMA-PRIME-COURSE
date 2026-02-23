const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('connection successful');
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "price is too low for amazon selling!"],
    },
    disconnect: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: {
        type: [String],
    },
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("6996ae9b27fbdc5c62778828", {price: -1500}, {runValidators: true

}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});

let book1 = new Book({
    title: "hindi XII",
    author: "RD Sharma",
    price: 10,
    category: "fiction",
    genre: ["comics", "superheroes", "fiction", "non-fiction"]
});
book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);

})