const express =require("express")
const app = express()
const jwt = require("jsonwebtoken")
const userModel = require("../Model/user-model")


module.exports.isLoggedin=async function(req,res,next){
    try{
        let token =req.cookies.token
         if(!token){
      return  res.redirect("/")
    }

   
        let decoded = jwt.verify(token,"secret_key")
        let user = await userModel.findOne({email:decoded.email})
        
        if(!user){
            return res.redirect("/")
        }
        
        req.user = user
        next() 
        
        }
    
    catch(err){
        res.redirect("/")
    }
}
   
   


