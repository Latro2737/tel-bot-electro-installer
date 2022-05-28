const sequelize = require('./db')
const { DataTypes } = require('sequelize');

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, unique: true},
    firstName: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    service: {type: DataTypes.STRING}
});

module.exports = Order;