const express= require("express")
const ownerRouter= express.Router()

ownerRouter.get("/admin",function(req,res){
    res.render("createproducts",{success:""})
})

ownerRouter.post("/create",function(req,res){
   // res.render("")
})

module.exports=ownerRouter