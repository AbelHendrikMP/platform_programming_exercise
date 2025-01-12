const userController = require('../controllers/user-controller');
const express = require('express');
const router = express.Router();
const userAuth = require('../middleware/user-auth')

router.get('/', userController.getAllUsers);
router.get('/:id', userAuth, userController.getUserById);
router.post('/',userController.addUser)

module.exports = router;