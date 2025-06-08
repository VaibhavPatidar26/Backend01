const mongoose= require("mongoose")
mongoose.connect("mongodb+srv://admin:patidar123@cluster0.dm2f6ss.mongodb.net/").then(console.log("connected to database")).catch((error)=>{
    console.log(error)
})

module.exports=mongoose.connection;