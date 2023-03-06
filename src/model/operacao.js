// Importação
const Sequelize = require('sequelize');
const database = require('../config/db');
// Criando a tabela Sala
const operacao = database.define('Operacao', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Operacao: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Descricao: {
        type: Sequelize.STRING(250),
        allowNull: false
    }

});
// Exportando essa tabela
module.exports = operacao;