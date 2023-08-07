const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

class FavoritePost extends Model { }

FavoritePost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    modelName: 'favoritePost',
    sequelize,
    underscored: true,
  },
);

module.exports = FavoritePost;
