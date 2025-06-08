const jwt = require("jsonwebtoken")
const userModel = require("../Model/user-model")
const { generateToken } = require("./generateToken")

module.exports.registerUser = async function (req, res) {
    try {
        let { email, password, fullname } = req.body
        let existingUser = await userModel.findOne({ email: email })
        if (existingUser) {
            res.send("user already exists please login")
        }
        else {
            let user = await userModel.create({
                email: email,
                password: password,
                fullname: fullname
            })


            const token = generateToken(user)
            res.cookie("token", token)
            res.send({
                message: "user created",
                token: token
            })
        }

    }
    catch (err) {
        res.send(err.message)
    }
}