const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

router.post('/register', (req, res) => {
  res.status(200).send()
})

router.post('/login', (req, res) => {
  res.status(200).send()
})

router.get('/logout', (req, res) => {
  res.status(200).send()
})

module.exports = router;
