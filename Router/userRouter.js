const express= require("express")
const { registerUser } = require("../controllers/register-user")
const { userLogin } = require("../controllers/userLogin")
const userRouter=express.Router()

userRouter.get("/",function(req,res){
    res.send({
        message: "hello this is user"
    })
})

userRouter.post("/register", registerUser)
userRouter.post("/login", userLogin)

module.exports= userRouter