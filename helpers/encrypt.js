const bcrypt = require('bcrypt');

function encrypt(plainPassword, cb) {
    const saltRounds = 10;
    // return new Promise((resolve, reject) => {
    bcrypt.hash(plainPassword, saltRounds).then((hash) => {
        cb(hash)
    });
    // })
}


module.exports = encrypt