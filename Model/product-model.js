const mongoose = require("mongoose")
const Schema = mongoose.Schema
const prodSchema =  new Schema(
    {
        image: String,
        prodname: String,
        price: Number,
        discount:Number
    }
)

module.exports= mongoose.model("prod",prodSchema)