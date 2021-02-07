const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        try {
            const token = bearerHeader.split(' ')[1]
            jwt.verify(token, 'secret')
            next()
        } catch (error) {
           return res.sendStatus(403)
        }

    } else {
        res.sendStatus(403)
    }
}

module.exports = verifyToken