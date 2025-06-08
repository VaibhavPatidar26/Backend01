const mongoose = require("mongoose")
const Schema = mongoose.Schema

const prodSchema = new Schema({
    image: Buffer, // Store image as Buffer for base64 conversion
    name: String, // Changed from 'prodname' to 'name' to match EJS
    price: Number,
    discount: Number,
    bgcolor: { type: String, default: "#f5f5f5" }, // Background color for product card
    panelcolor: { type: String, default: "#ffffff" }, // Panel color
    textcolor: { type: String, default: "#000000" } // Text color
})

module.exports = mongoose.model("prod", prodSchema)