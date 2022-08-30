const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')
const privateKey = fs.readFileSync(path.join(__dirname, "../../keys/private.key"))
const publicKey = fs.readFileSync(path.join(__dirname, "../../keys/public.key"))



const signOption = {
    issuer: "ACE",
    audience: "ace",
    algorithm: "RS256"
}

exports.generateToken = payload => jwt.sign(payload, privateKey, { ...signOption, expiresIn: "3d" })

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log("token => ", token)
    if (!token) {
        return res.status(401).json({ status: "Error" })
    }

    jwt.verify(token, publicKey, signOption, (err, decode) => {
        if (err) {
            return res.status(401).json({ status: "Error" })
            
        }
        next()
    })


}



