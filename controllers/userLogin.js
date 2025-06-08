const userModel = require("../Model/user-model")
const { generateToken } = require("./generateToken")

module.exports.userLogin = async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await userModel.findOne({ email: email })
        
        if (user && user.password === password) {
       
            const token = generateToken(user)
            res.cookie("token", token)
            res.send({
                message: "you are logged in",
                token: token
            })

        if(user.password!=password){
          res.send({
            message: "invalid credentials"
          })
        }
        } else {
            res.send({
                message: "invalid credentials"
            })
        }
    } catch (err) {
        res.status(500).send({
            message: "Server error: " + err.message
        })
    }
}

