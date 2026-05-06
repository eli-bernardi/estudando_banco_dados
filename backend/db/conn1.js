const { Sequelize } = require('Sequelize')

const db = new Sequelize('db_crud', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = db 