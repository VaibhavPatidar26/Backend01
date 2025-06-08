const jwt = require("jsonwebtoken")

module.exports.generateToken= function(user){
                return jwt.sign({
                email : user.email,
                id: user._id
            },"secret_key")
           
}
//, id : user._id