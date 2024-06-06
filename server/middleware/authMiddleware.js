const jwt = require('jsonwebtoken')
const User = require('../model/userModel')



const protected = async (req, res, next) => {
    let token = req.cookies.token

    if (!token) {
        return res.status(401).json({ error: "Unauthorized access, No token" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id).select("-password");
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({ error: "Not Authorized, Token failed" })
    }
}


module.exports = protected