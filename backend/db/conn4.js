const {Sequelize} = require('Sequelize')

const db = new Sequelize('nome_banco','root','senai',{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = db