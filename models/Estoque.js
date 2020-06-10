const db = require('./db')

const Estoque = db.sequelize.define('Estoque', {
    nome: {
        type: db.Sequelize.STRING(60),
        require: true
    },
    marca: {
        type: db.Sequelize.STRING(60),
        require: true
    },
    desc: {
        type: db.Sequelize.TEXT,
    },
    validade: {
        type: db.Sequelize.STRING,
    },
    uniMedida: {
        type: db.Sequelize.STRING(10),
        require: true

    },
    quantidade: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    valor: {
        type: db.Sequelize.FLOAT,
        require: true
    },

})

//create table,
//Estoque.sync({ force: true })

module.exports = Estoque