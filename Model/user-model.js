const mongoose = require("mongoose")

const Schema = mongoose.Schema

//mongoose.connect("mongodb+srv://admin:patidar123@@cluster0.9kuvjkg.mongodb.net/")

const userSchema= new Schema({
    fullname: String,
    email: {type: String, required: true},
    Phone_number: String,
    password: {type: String, required: true },
    profile_pic:String,
    cart: {type:Array, default:[]},
    

    
})

module.exports= mongoose.model("user",userSchema)