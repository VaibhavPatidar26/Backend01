const express= require("express")
const ownerRouter= express.Router()






ownerRouter.get("/admin",function(req,res){
   let success = req.flash("success")
    res.render("createproducts",{success})
})

ownerRouter.post("/create",function(req,res){
   // res.render("")
})

module.exports=ownerRouter