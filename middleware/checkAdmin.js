const jwt = require('jsonwebtoken')

function isAdmin(req, res, next) {
    jwt.verify(req.headers.token, "hegfefkahfkahfdju", function (err, decoded) {
        if (err) {
            res.send("")
        } else {

            next()
        }
    })
}

module.exports = isAdmin