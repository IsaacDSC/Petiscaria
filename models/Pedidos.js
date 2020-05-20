const db = require('../models/db')

const Pedidos = db.sequelize.define('pedido', {
    nome: {
        type: db.Sequelize.STRING(60),
        require: true
    },
    telefone: {
        type: db.Sequelize.INTEGER,
        require: true
    },
    bairro: {
        type: db.Sequelize.STRING(220),
        require: true
    },
    rua: {
        type: db.Sequelize.STRING(220),
        require: true,
    },
    numeroResidencia: {
        type: db.Sequelize.INTEGER,
        require: true
    },
    complemento_ref: {
        type: db.Sequelize.TEXT
    },
    produto01: {
        type: db.Sequelize.STRING,
        require: true
    },
    produto01_valor: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    produto02: {
        type: db.Sequelize.STRING,
        require: true
    },
    produto02_valor: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    observacao: {
        type: db.Sequelize.TEXT
    }
})

//adionando tables models para receber pedidos
//Pedidos.sync({ force: true })

module.exports = Pedidos