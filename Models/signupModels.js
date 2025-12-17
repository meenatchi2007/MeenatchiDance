const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: String,
    email: { type: String, required: true, unique: true },
    phone: Number,
    password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("users", userSchema);
