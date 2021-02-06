const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userController = require('../controllers/user.controller')

router.post('/register', userController.create)
router.post('/login', userController.login)

module.exports = router;
