const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Message = sequelize.define(
  'message',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    underscored: true,
  },
);

module.exports = Message;
