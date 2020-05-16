const db = require('../models/db')

const EstoquePedido = db.sequelize.define('EstoqueProduto', {
    nome: {
        type: db.Sequelize.STRING(60),
        require: true
    },
    marca: {
        type: db.Sequelize.STRING(60),
        require: true
    },
    validade: {
        type: db.Sequelize.STRING,
        require: true
    },
    uniMedida: {
        type: db.Sequelize.STRING(10),
        require: true

    },
    quantidade: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    gastoemPedido: {
        type: db.Sequelize.FLOAT
    },
    valor: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    rendimento: {
        type: db.Sequelize.STRING
    },
    rendimento1: {
        type: db.Sequelize.INTEGER
    }
})

//create table,
//EstoquePedido.sync({ force: true })

module.exports = EstoquePedido