const express = require("express")
const productRouter = express.Router()
const upload = require("../config/multerConfig");
const productModel = require("../Model/product-model")

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
        discount,
        bgcolor,
        panelcolor,
        textcolor
    })

    res.send(product)
})

module.exports = productRouter