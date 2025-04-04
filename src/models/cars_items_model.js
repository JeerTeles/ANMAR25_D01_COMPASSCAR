const { DataTypes } = require('sequelize'); // import object relational mapper  for node.js / { DataTypes }: Esta é uma sintaxe de desestruturação do JavaScrip /
const sequelize = require('../config/database');
const Car = require('./car.model'); 

const CarItem = sequelize.define('CarItem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Car,
      key: 'id',
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: 'CASCADE',
  },
});

// Define the association (one-to-many: one Car can have many CarItems)
Car.hasMany(CarItem, { foreignKey: 'carId' });
CarItem.belongsTo(Car, { foreignKey: 'carId' });

module.exports = CarItem;