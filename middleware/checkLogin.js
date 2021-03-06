const jwt = require('jsonwebtoken')
require('dotenv').config()

function isLogin(req, res, next) {
    jwt.verify(req.headers.token, process.env.secret, function (err, result) {
        if (err) {
            res.send(err)
        }
        if (result.isLogin) {
            req.headers.decoded = result
            next()
        } else {
            res.send("Anda harus login")
        }
    })
}



module.exports = isLogin