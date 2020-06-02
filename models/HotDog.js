const db = require('./db')

const HotDog = db.sequelize.define('HotDog', {
        nome: {
            type: db.Sequelize.STRING(60),
            require: true
        },
        valorGasto: {
            type: db.Sequelize.FLOAT,
            require: true
        },
        valorVendido: {
            type: db.Sequelize.FLOAT,
            require: true
        },
        desc: {
            type: db.Sequelize.TEXT,
            require: true
        }
    })
    //create table models
    //HotDog.sync({ force: true })

module.exports = HotDog