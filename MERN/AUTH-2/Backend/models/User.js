const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: [3, 'Name must be at least 3 characters long'],
        max: [50, 'Name cannot exceed 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        unique: [true, 'Email already exists'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        min: [6, 'Password must be at least 6 characters long'],
        max: [20, 'Password cannot exceed 20 characters']
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
},
    {
        timestamps: true
    });

    module.exports = mongoose.model("User", userSchema);