const mongoose =require("mongoose")
const Schema= mongoose.Schema

//mongoose.connect()

const adminSchema= new Schema({
    username: String,
    password: String,
    email: String

})

module.exports=mongoose.model("admin",adminSchema)