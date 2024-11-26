const Sequelize = require('sequelize');

const sequelize = new Sequelize('tareas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

module.exports = sequelize;
