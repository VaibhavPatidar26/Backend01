const express = require("express");
const { isLoggedin } = require("../Middlewares/isLoggedin");
const productModel = require("../Model/product-model");
const userModel = require("../Model/user-model");
const homeRouter = express.Router()

homeRouter.get("/",function(req,res){
    let error = req.flash("error")
   res.render("index",{error})
})

homeRouter.get("/shop",isLoggedin,async function(req,res){
    let products = await productModel.find()
    res.render("shop",{products})
})

homeRouter.get("/addtocart/:productid",isLoggedin,async function(req,res){
    let user = await userModel.findOne({email:req.user.email})
    user.cart.push(req.params.productid)
    await user.save()
    res.redirect("/shop")
})

homeRouter.get("/cart",isLoggedin,async function(req,res){
    let user=await userModel.findOne({email:req.user.email}).populate("cart")
    res.render("cart",{user})
})

homeRouter.post("/cart/remove",isLoggedin,async function(req,res){
    let user = await userModel.findOne({email:req.user.email})
    const cart_id = req.body.itemId
    // Remove all instances of this product
    user.cart = user.cart.filter(id => id.toString() !== cart_id)
    await user.save()
    res.redirect("/cart")
})

homeRouter.post("/cart/increase",isLoggedin,async function(req,res){
    let user = await userModel.findOne({email:req.user.email})
    const productId = req.body.itemId
    user.cart.push(productId)
    await user.save()
    res.redirect("/cart")
})

homeRouter.post("/cart/decrease",isLoggedin,async function(req,res){
    let user = await userModel.findOne({email:req.user.email})
    const cart_id = req.body.itemId
    
    // Find the index of the first occurrence and remove only that one
    const index = user.cart.findIndex(id => id.toString() === cart_id)
    if (index > -1) {
        user.cart.splice(index, 1)
    }
    
    await user.save()
    res.redirect("/cart")
})

module.exports=homeRouter