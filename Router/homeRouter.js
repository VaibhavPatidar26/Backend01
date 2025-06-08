const express = require("express");
const { isLoggedin } = require("../Middlewares/isLoggedin");
const homeRouter = express.Router()
//const {"index"} = require("../views/partials/index.ejs")


homeRouter.get("/",function(req,res){
    let error = req.flash("error")
   res.render("index",{error})
    
})

homeRouter.get("/shop",isLoggedin,function(req,res){

  const sampleProducts = [
        {
            name: "Sample Product 1",
            price: 999,
            bgcolor: "#f3f4f6",
            panelcolor: "#ffffff",
            textcolor: "#000000",
            image: Buffer.from("")
        },
        {
            name: "Sample Product 2", 
            price: 1299,
            bgcolor: "#fef3c7",
            panelcolor: "#fbbf24",
            textcolor: "#ffffff",
            image: Buffer.from("")
        },
        {
            name: "Sample Product 3",
            price: 799,
            bgcolor: "#dbeafe",
            panelcolor: "#3b82f6",
            textcolor: "#ffffff", 
            image: Buffer.from("")
        },
        {
            name: "Sample Product 4",
            price: 1599,
            bgcolor: "#dcfce7",
            panelcolor: "#22c55e",
            textcolor: "#ffffff",
            image: Buffer.from("")
        },
        {
            name: "Sample Product 5",
            price: 899,
            bgcolor: "#fce7f3",
            panelcolor: "#ec4899",
            textcolor: "#ffffff",
            image: Buffer.from("")
        },
        {
            name: "Sample Product 6",
            price: 1199,
            bgcolor: "#f3e8ff",
            panelcolor: "#8b5cf6",
            textcolor: "#ffffff",
            image: Buffer.from("")
        }
    ];


    res.render("shop",{products: sampleProducts})
})

module.exports=homeRouter