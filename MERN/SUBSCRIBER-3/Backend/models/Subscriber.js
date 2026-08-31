const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: [true, "please enter email before subscribing!"]
    }
}, { timeseries: true });

const Subscriber = mongoose.model("Subscriber", subscriberSchema);
module.exports = Subscriber;