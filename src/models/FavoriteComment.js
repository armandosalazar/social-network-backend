const {DataTypes, Model} = require('sequelize');
const sequelize = require('../connection');

class FavoriteComment extends Model {}

FavoriteComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        underscored: true,
    },
);