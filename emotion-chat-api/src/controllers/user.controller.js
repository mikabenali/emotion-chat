const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const database = require('../models')
const User = database.models.user

const create = async (req, res) => {
    const body = req.body

    const user = await User.findOne({
        where: { username: body.username}
    })

    if (user) {
        return res.status(409).send('User exist')
    }

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
        console.log(process.env)
        const token = jwt.sign(user.dataValues, 'secretKeyTest', { expiresIn: '10s'})
        return res.status(200).json({
            token: token
        })
    } else {
        return res.status(401).send()
    }
}

const verifyToken = async (req, res) => {
    return res.status(200).send()
}

module.exports = {
    create,
    login,
    verifyToken
}
