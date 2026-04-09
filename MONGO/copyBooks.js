const mongoose = require("mongoose");

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/demoBook");
        console.log("Mongodb connected successful");

        const bookSchema = mongoose.Schema({
            title: {
                type: String,
                require: true,
                maxLength: 30,
            },
            author: {
                type: String,
                maxLength: 20,
            },
            category: {
                type: String,
                enum: ["fiction", "non-fiction"],
                require: true,
            },
            genre: {
                type: [String],
                require: true,
            },
            price: {
                type: Number,
                min: [1, "The price is too low for selling!"],
                require: true,
            },
            discount: {
                type: Number,
                default: 0,
                min: [0, "please give discount more than 0"],
                max: [100, "please give discount less than price"],
            },
        });

        const Book = mongoose.model("Book", bookSchema);
    
        // Book.findByIdAndUpdate("69cba3f113e19bf47c533a38", {price: 56}, {runValidators: true
        // }).then((res)=>{
        //     console.log(res)
        // }).catch((err)=>{
        //     console.log(err.errors.price.message)
        // })


        let book1 = new Book({
            title: "10th hindi",
            author: "Pujesh",
            price: 50,
            discount: -10,
            genre: ["math, science, hindi"],
            category: "fiction",
        })
        book1.save()
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            if(err.errors.category){
            console.log(err.errors.category.message);
            }
            if(err.errors.discount){
                console.log(err.errors.discount.message)
            }
        })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        //     await Book.insertMany
    //     ([
    //         {
    //         title: "Science",
    //         author: "Dilkhush Kumar",
    //         category: "fiction",
    //         genre: ["science", "mathematics"],
    //         price: 1110,
    //         discount: 100,
    //         },
    //         {
    //         title: "Mathematics",
    //         author: "Roshan Kumar",
    //         category: "non-fiction",
    //         genre: ["science", "mathematics"],
    //         price: 210,
    //         discount: -10,
    //         }],
    // ).then((res)=>{
    //     console.log(res)
    // }).catch((err)=>{
    //     console.log(err.errors.discount.message)
    // });


    }catch(err){
        console.log(err);
    }
}
main();