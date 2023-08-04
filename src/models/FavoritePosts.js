const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

class FavoritePosts extends Model {}

FavoritePosts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    underscored: true,
  },
);

module.exports = FavoritePosts;
