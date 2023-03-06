const cliente = require('./clientes');
const operacao = require('./operacao');


operacao.belongsTo(cliente, {
    constraint: true, //Garantir integridade referencial
    foreignKey: 'ID'
    });