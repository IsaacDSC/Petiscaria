const Sequelize = require('sequelize')
const sequelize = new Sequelize('pdv', 'dev', 'secret', {
    host: 'localhost',
    dialect: 'mysql'
})


sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!')
}).catch((err) => {
    console.log('erro ao se conectar com mysql: ' + err)
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}