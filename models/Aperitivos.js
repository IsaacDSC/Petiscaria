const db = require('./db')

const Aperitivos = db.sequelize.create('Aperitivos', {
    codigo: {
        type: db.Sequelize.STRING(30)
    },
    nome: {
        type: db.Sequelize.STRING(60),
        require: true
    },
    descricao: {
        type: db.Sequelize.TEXT(300),
        require: true
    },

})