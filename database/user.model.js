const sequelize = require('./db')
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, unique: true},
    chatId: {type: DataTypes.STRING, unique: true},
    username: {type: DataTypes.STRING},
    visit: {type: DataTypes.INTEGER, defaultValue: 0}
});

module.exports = User;