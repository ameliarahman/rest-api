const jwt = require('jsonwebtoken')

function isAdmin(req, res, next) {
    if (req.headers.decoded.admin) {
        next()
    } else {
        res.send("Anda bukan admin!")
    }

}

module.exports = isAdmin