const jwt = require("jsonwebtoken")
const User = require("../models/User")

const auth = async(req, res, next)=>{
    try {
        const authToken = req.header('token')
        if(!authToken) return res.send('Please Authenticate')
        const user = jwt.decode(authToken, process.env.SECRET)
        req.user = user.id
        next()
    } catch (error) {
        console.log(error)
        res.send("Please Authenticate")
    }
}

module.exports = auth