const { DataTypes } = require('sequelize')
const db = require('../db/conn5')

const Paciente = db.define('paciente', {
    codPaciente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cpf: {
        type: DataTypes.NUMBER(11),
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sintoma: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    doenca: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Paciente

