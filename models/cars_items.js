const Sequelize = require('sequelize');
const sequelize = require('../connection');
const Car = require('./cars'); // Importe o model Car

const CarItem = sequelize.define('car_item', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  carId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Car,
      key: 'id'
    }
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
});

module.exports = CarItem;