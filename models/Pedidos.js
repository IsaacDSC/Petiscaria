const db = require('../models/db')

const Pedidos = db.sequelize.define('pedido', {
    valorEntrega: {
        type: db.Sequelize.FLOAT
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
    obsPetisco: {
        type: db.Sequelize.TEXT
    },
    hotdog: {
        type: db.Sequelize.STRING,
    },
    obsHotDog: {
        type: db.Sequelize.TEXT
    },
    one_bebidas: {
        type: db.Sequelize.STRING,
        require: true
    },
    tow_bebidas: {
        type: db.Sequelize.STRING,
        require: true
    },
    one_qtdBebidas: {
        type: db.Sequelize.INTEGER,
        require: true
    },
    tow_qtdBebidas: {
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