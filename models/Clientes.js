const db = require('../models/db')

const Cliente = db.sequelize.define('cliente', {
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
})

//create table models
//Cliente.sync({ force: true })

module.exports = Cliente