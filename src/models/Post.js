const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Post = sequelize.define('post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  underscored: true
})

Post.associate = models => {
  Post.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
  Post.hasMany(models.Comment, { as: 'comments', foreignKey: 'postId' })
}

module.exports = Post
