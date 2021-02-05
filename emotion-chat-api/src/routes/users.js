const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const users = []

router.post('/register', (req, res) => {
  const body = req.body

  const salt = bcrypt.genSaltSync(10)
  const hashPassword = bcrypt.hashSync(body.password, salt)

  const user = users.find(user => user.username === body.username)
  if (user) {
   return res.status(409).send('User exist')
  }

  users.push({
    username: body.username,
    password: hashPassword
  })

  return res.status(200).send()
})

router.post('/login', (req, res) => {
  const body = req.body

  const user = users.find(user => user.username === body.username)
  if (! user) {
    return res.status(404).send('User not found')
  }

  if (bcrypt.compareSync(body.password, user.password)) {
    return res.status(200).send()
  } else {
    return res.status(401).send()
  }
})

router.get('/logout', (req, res) => {
  return res.status(200).send()
})

module.exports = router;
