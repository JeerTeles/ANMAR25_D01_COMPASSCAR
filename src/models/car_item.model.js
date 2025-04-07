const { DataTypes } = require('sequelize'); 
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
  car_id: {
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


Car.hasMany(CarItem, { foreignKey: 'car_Id' });
CarItem.belongsTo(Car, { foreignKey: 'car_Id' });

module.exports = CarItem;