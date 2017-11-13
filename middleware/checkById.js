const jwt = require('jsonwebtoken')

function isId(req, res, next) {
    if (req.headers.decoded.id == req.params.id) {
        next()
    } else {
        res.send("Anda tidak dapat melihat profile ini!")
    }
}

module.exports = isId