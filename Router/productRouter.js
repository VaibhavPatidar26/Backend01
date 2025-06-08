const express = require("express")
const productRouter= express.Router()

productRouter.get("/",function(req,res){
    res.send({
        message : "this is product page"
    })
})

module.exports=productRouter