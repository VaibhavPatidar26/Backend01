const express = require("express")
const productRouter = express.Router()
const upload = require("../config/multerConfig");
const productModel = require("../Model/product-model")
const flash = require("express-flash")

productRouter.post("/create", upload.single("image"), async function (req, res) {

    let {
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor
    } = req.body

    let product = await productModel.create({
        image: req.file.buffer,
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor
    })
    req.flash("success","product created")
    res.redirect("/owners/admin")
   
})

module.exports = productRouter