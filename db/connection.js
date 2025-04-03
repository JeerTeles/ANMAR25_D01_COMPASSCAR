const Sequelize = require('sequelize');

const sequelize = new Sequelize('compasscar', 'root', 'SqlAcer2025', {
  host: 'localhost', // ou o endereço do seu servidor MySQL
  dialect: 'mysql'
});

module.exports = sequelize;