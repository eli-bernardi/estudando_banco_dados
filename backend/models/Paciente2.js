const { DataTypes } = require('sequelize')
const db = require('../db/conn5')

const Paciente = db.define('paciente', {
    codPaciente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },

}, {
    timestamps: false
})
module.exports = Paciente