const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userController = require('../controllers/user.controller')
const verifyToken = require('../middlewares/verify_token.middleware')

router.get('/test', verifyToken, (req, res) => {
    res.json('test ok')
})
router.post('/register', userController.create)
router.post('/login', userController.login)

module.exports = router;
