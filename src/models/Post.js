const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Post = sequelize.define(
  'post',
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

Post.associate = (models) => {
  Post.belongsTo(models.User, { as: 'users', foreignKey: 'userId' });
  // Post.hasMany(models.Comment, { as: 'comments', foreignKey: 'postId' });
};

module.exports = Post;
