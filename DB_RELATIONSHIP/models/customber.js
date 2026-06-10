const mongoose = require("mongoose");
const schema = mongoose.Schema;
main().then(() => {
    console.log('mongodb connected successful');
})
    .catch(err => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationships");
}

const orderSchema = new schema({
    item: String,
    price: Number,
});

const customberSchema = new schema({
    name: String,
    orders: [
        {
            type: schema.Types.ObjectId,
            ref: "Order",
        }
    ]
});

// customberSchema.pre("findOneAndDelete", async ()=>{
//     console.log('pre middleware called');
// });
customberSchema.post("findOneAndDelete", async (customber)=>{
    console.log('post middleware called');
    if(customber.orders.length){
        let res = await Order.deleteMany({ _id: { $in: customber.orders}});
        console.log(res);
    }
});

const Order = mongoose.model("Order", orderSchema);
const Customber = mongoose.model("Customber", customberSchema);

const addCust = async ()=>{
    let newCust = new Customber({
        name: "Karan Arjun"
    });

    let newOrder = new Order({
        item: "Burger",
        price: 250,
    });
    newCust.orders.push(newOrder);

await newOrder.save();
await newCust.save();
console.log("Data added successfully");
};
// addCust();

const deleteCust = async ()=>{
    let res = await Customber.findOneAndDelete("69e5b4cb0d4b02ba7dd17f23");
    console.log(res);
}
deleteCust();


// const addCustomber = async () => {
//     let cust1 = new Customber({
//         name: "john Donne",
//     })
//     let order1 = await Order.findOne({ item: "samosa" });
//     let order2 = await Order.findOne({ item: "kachori" });

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let res = await cust1.save();
//     console.log(res);

// }
// addCustomber();

// const findCustomber = async ()=>{
//     let res = await Customber.find({}).populate("orders");
//     console.log(res[0]);
// }
// findCustomber();



// const addOrder = async()=>{
//     let res = await Order.insertMany([
//         {
//             item: "samosa", price: 20
//         },
//         {
//             item: "kachori", price: 30
//         },
//         {
//             item: "jalebi", price: 40
//         }
//     ]);
//     console.log(res);
// }
// addOrder();