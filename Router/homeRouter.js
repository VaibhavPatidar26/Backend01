const express = require("express");
const homeRouter = express.Router()
//const {"index"} = require("../views/partials/index.ejs")


homeRouter.get("/",function(req,res){
    let error = req.flash("error")
   res.render("index",{error})
    
})

module.exports=homeRouter