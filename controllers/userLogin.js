const userModel = require("../Model/user-model")
const { generateToken } = require("./generateToken")

module.exports.userLogin = async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await userModel.findOne({ email: email })
        
        if (user && user.password === password) {
            const token = generateToken(user)
            res.cookie("token", token)
            // Redirect to shop page (middleware will handle authentication)
            res.redirect("/shop")
        } else {
            // Flash error message and redirect back to login page
            req.flash("error", "Invalid credentials")
            res.redirect("/")
        }
    } catch (err) {
        req.flash("error", "Server error: " + err.message)
        res.redirect("/")
    }
}