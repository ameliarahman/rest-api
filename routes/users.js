var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const isLogin = require('../middleware/checkLogin')
const isAdmin = require('../middleware/checkAdmin')
const isId = require('../middleware/checkById')
/* GET users listing. */
router.get('/', isLogin, isAdmin, userController.getAllDataUser);
router.post('/', isLogin, isAdmin, userController.createDataUser)
router.get('/:id', isLogin, isId, userController.getDataUserById)
router.delete('/:id', isLogin, isAdmin, userController.deleteDataUser)
router.put('/:id', isLogin, isId, userController.updateDataUser)

module.exports = router;
