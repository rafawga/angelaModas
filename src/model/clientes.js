// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
// Criando a tabela Sala
const cliente = database.define('Cliente', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Sobrenome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Telefone: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING(50),
        allowNull: false
    },

    Cpf: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true

    },
    Endereco: {
        type: Sequelize.STRING(100),
        allowNull: true
    },

    Saldo: {
        type: Sequelize.MONEY,
        allowNull: true
    }




});
// Exportando essa tabela
module.exports = cliente;