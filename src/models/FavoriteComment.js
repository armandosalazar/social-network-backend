const {DataTypes, Model} = require('sequelize');
const sequelize = require('../connection');

class FavoriteComment extends Model {}

FavoriteComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    },
    {
        modelName: 'favorite_comment',
        sequelize,
        underscored: true,
    },
);

module.exports = FavoriteComment;
