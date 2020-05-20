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
    residencia: {
        type: db.Sequelize.INTEGER,
        require: true
    },
    complemento_ref: {
        type: db.Sequelize.TEXT
    },
    tamanhoPetisco: {
        type: db.Sequelize.STRING,
        require: true
    },
    opc01: {
        type: db.Sequelize.STRING,
        require: true
    },
    opc02: {
        type: db.Sequelize.STRING,
        require: true
    },
    opc03: {
        type: db.Sequelize.STRING,
        require: true
    },
    bebidas: {
        type: db.Sequelize.STRING,
        require: true
    },
    qtdBebidas: {
        type: db.Sequelize.INTEGER,
        require: true
    },
    observacao: {
        type: db.Sequelize.TEXT
    },
    valor: {
        type: db.Sequelize.FLOAT,
        require: true
    }
})

//adionando tables models para receber pedidos
//Pedidos.sync({ force: true })

module.exports = Pedidos