const db = require('./db')

const OpcaoAperitivo = db.sequelize.define('opcAperitivo', {
    nome: {
        type: db.Sequelize.STRING(60),
        require: true
    },
    valor: {
        type: db.Sequelize.FLOAT,
        require: true
    },
    gasto: {
        type: db.Sequelize.FLOAT,
        require: true
    }
})

//create table models
//OpcaoAperitivo.sync({ force: true })

module.exports = OpcaoAperitivo