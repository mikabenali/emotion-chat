const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: 'database',
        dialect: 'postgres'
    }
)

const database = {}
database.sequelize = sequelize

database.models = {
    user: require('./user.model')(sequelize)
}

module.exports = database