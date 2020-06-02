const db = require('./db')

const Bebidas = db.sequelize.define('bebida', {
        nome: {
            type: db.Sequelize.STRING,
            require: true
        },
        quantidade: {
            type: db.Sequelize.STRING,
            require: true
        },
        valorCompra: {
            type: db.Sequelize.FLOAT,
            require: true
        },
        valorVenda: {
            type: db.Sequelize.FLOAT,
            require: true
        },
        validade: {
            type: db.Sequelize.DATE,
            require: true
        },
        desc: {
            type: db.Sequelize.TEXT,
            require: true
        }
    })
    //add table models
    //Bebidas.sync({ force: true })

module.exports = Bebidas