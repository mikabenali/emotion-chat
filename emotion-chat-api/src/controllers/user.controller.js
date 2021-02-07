const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const database = require('../models')
const User = database.models.user

const create = async (req, res) => {
    const body = req.body

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(body.password, salt)

    try {
        await User.create({
            username: body.username,
            password: hashPassword
        })

        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({ message: error})
    }
}

const login = async (req, res) => {
    const body = req.body

    const user = await User.findOne({
       where: { username: body.username}
    })

    if (! user) {
        return res.status(404).send('User not found')
    }

    if (bcrypt.compareSync(body.password, user.password)) {
        const token = jwt.sign(user.dataValues, 'secret')
        return res.status(200).json(token)
    } else {
        return res.status(401).send()
    }
}

module.exports = {
    create,
    login
}