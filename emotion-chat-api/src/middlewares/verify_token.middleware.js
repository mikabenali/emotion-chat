const jwt = require('jsonwebtoken')

const verifyTokenMiddleware = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined' && bearerHeader.includes('Bearer', 0)) {
        try {
            const token = bearerHeader.split(' ')[1]
            jwt.verify(token, 'secretKeyTest')
            next()
        } catch (error) {
           return res.sendStatus(403)
        }

    } else {
        return res.sendStatus(403)
    }
}

module.exports = verifyTokenMiddleware