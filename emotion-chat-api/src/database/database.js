const { Sequelize } = require('sequelize')

const databaseInit = async () => {
// const sequelize = new Sequelize(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`)
    const database = new Sequelize({
        database: process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.POSTGRES_HOST,
    })

    try {
        await database.authenticate();
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }

    return database
}

const database = databaseInit()
module.exports = database