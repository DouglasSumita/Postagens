const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'root', 'senha1', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}