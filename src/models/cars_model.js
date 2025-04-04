const Sequelize = require('sequelize');
const sequelize = require('../connection'); // Importe a conexão

const Car = sequelize.define('car', {
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false
  },
  plate: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
});

module.exports = Car;