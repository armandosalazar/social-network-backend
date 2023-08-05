const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

class Post extends Model { }

Post.init(
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
    isFavorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    modelName: 'post',
    sequelize,
    underscored: true,
  },
);

module.exports = Post;
