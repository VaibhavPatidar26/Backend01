const express= require("express")
const adminRouter= express.Router()

adminRouter.get("/",function(req,res){
    res.send({
        message : "hello this is admin"
    })
})

module.exports=adminRouter