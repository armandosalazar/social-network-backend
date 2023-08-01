const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: 'users_email',
        msg: 'Email already exists',
      },
      validate: {
        isEmail: {
          msg: 'Invalid email',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    underscored: true,
  },
);

User.associate = (models) => {
  // User has many posts
  User.hasMany(models.Post, { as: 'posts', foreignKey: 'userId' });
  // User.hasMany(models.Comment, { as: 'comments', foreignKey: 'userId' });
};

module.exports = User;
