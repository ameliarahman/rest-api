const express = require('express');
const User = require('../models').User
const encrypt = require('../helpers/encrypt')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')


signInDataUser = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }

    }).then((dataUser) => {
        if (!dataUser) {
            res.status(401).json({
                message: "Authentication failed. User not found"
            })
        } else {
            bcrypt.compare(req.body.password, dataUser.password).then((hasil) => {
                if (!hasil) {
                    res.status(401).json({
                        message: "Authentication failed. Password is incorrect"
                    })
                } else {
                    const payload = {
                        admin: dataUser.admin,
                        id: dataUser.id,
                        username: dataUser.username,
                        isLogin: true
                    }
                    jwt.sign(payload, "hegfefkahfkahfdju", function (err, token) {
                        if (err) {
                            throw err
                        } else {
                            res.send({
                                message: "Login berhasil",
                                token: token
                            })
                        }
                    })
                }
            })
        }
    })
}

getAllDataUser = (req, res) => {
    User.findAll()
        .then((dataUsers) => {
            //   console.log("Haloooooooooooooooo")
            res.send(dataUsers)
        })
        .catch((reason) => {
            console.log('ada error ', reason)
            res.send(reason)
        })
}

createDataUser = (req, res) => {
    //bcrypt.hash(req.body.password, saltRounds).then((hash) => {
    encrypt((req.body.password), (newPassword) => {
        User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: newPassword,
            address: req.body.address,
            no_telp: req.body.no_telp,
            admin: req.body.admin,
            username: req.body.username
        })
            .then((dataUser) => {
                res.send(dataUser)
            })
            .catch(reason => {
                console.log("Errorrrr", reason)
                res.send(reason)
            })
    })

    // });

}
getDataUserById = (req, res) => {
    User.findById(req.params.id)
        .then((dataUser) => {
            res.send((dataUser))
        })
        .catch((reason) => {
            res.send(reason)
        })
}
signupDataUser = (req, res) => {
    encrypt((req.body.password), (newPassword) => {
        User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: newPassword,
            address: req.body.address,
            no_telp: req.body.no_telp,
            username: req.body.username,
            admin: false
        })
            .then((dataUser) => {
                res.send(dataUser)
            })
            .catch(reason => {
                console.log("Errorrrr", reason)
                res.send(reason)
            })
    })
}

deleteDataUser = (req, res) => {
    if (req.headers.decoded.id == req.params.id) {
        res.send("Anda tidak dapat mendelete diri Anda sendiri")
    } else {
        User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.send({
                    message: 'Successfully deleted!'
                })
            })
            .catch((reason) => {
                res.send(reason)
            })
    }

}

updateDataUser = (req, res) => {
    encrypt((req.body.password), (newPassword) => {
        User.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            address: req.body.address,
            no_telp: req.body.no_telp,
            password: newPassword,
            // admin: req.body.admin

        }, {
                where: {
                    id: req.params.id
                }
            })
            .then((dataUser) => {
                res.send({
                    message: 'Successfully edited!'
                })
            })
            .catch(reason => {
                res.send(reason)
            })
    })

}

module.exports = {
    getAllDataUser,
    createDataUser,
    getDataUserById,
    signupDataUser,
    deleteDataUser,
    updateDataUser,
    signInDataUser
}