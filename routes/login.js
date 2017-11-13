var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const isLogin = require('../middleware/checkLogin')
const isAdmin = require('../middleware/checkAdmin')

/* GET users listing. */
router.post('/signin', userController.signInDataUser)
router.post('/signup', userController.signupDataUser)
module.exports = router;
