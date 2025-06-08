const jwt = require("jsonwebtoken")
const userModel = require("../Model/user-model")
const { generateToken } = require("./generateToken")

module.exports.registerUser = async function (req, res) {
    try {
        let { email, password, fullname } = req.body
        let existingUser = await userModel.findOne({ email: email })
        
        if (existingUser) {
            req.flash("error", "User already exists, please login")
            res.redirect("/")
        } else {
            let user = await userModel.create({
                email: email,
                password: password,
                fullname: fullname
            })

            const token = generateToken(user)
            res.cookie("token", token)
            // Redirect to shop page (middleware will handle authentication)
            res.redirect("/shop")
        }
    } catch (err) {
        req.flash("error", err.message)
        res.redirect("/")
    }
}