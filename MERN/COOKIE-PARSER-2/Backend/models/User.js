const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: [6, "password must be minimum 6 charactor"]
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
},
{
    timeseries: true
});

module.exports = mongoose.model("User", userSchema);