var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const isLogin = require('../middleware/checkLogin')
const isAdmin = require('../middleware/checkAdmin')
/* GET users listing. */
router.get('/', userController.getAllDataUser);
router.post('/', userController.createDataUser)
router.get('/:id', userController.getDataUserById)
router.delete('/:id', userController.deleteDataUser)
router.put('/:id', userController.updateDataUser)

module.exports = router;
