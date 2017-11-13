const jwt = require('jsonwebtoken')

function isLogin(req, res, next) {
    jwt.verify(req.headers.token, "hegfefkahfkahfdju", function (err, decoded) {
        if (err) {
            console.log(err)
        } else {
            console.log(decoded)
        }
    })
}

module.exports = isLogin