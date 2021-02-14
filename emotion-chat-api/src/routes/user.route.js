const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const userController = require('../controllers/user.controller')
const verifyTokenMiddleware = require('../middlewares/verify_token.middleware')

router.get('/test', verifyTokenMiddleware, (req, res) => {
    res.json('test ok')
})
router.post('/register', userController.create)
router.post('/login', userController.login)
router.post('/verify_token', userController.verifyToken)

module.exports = router;
