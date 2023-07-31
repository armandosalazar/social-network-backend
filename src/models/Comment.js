const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Comment = sequelize.define('comment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
}, {
  underscored: true
})

Comment.associate = models => {
  Comment.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
  Comment.belongsTo(models.Post, { as: 'post', foreignKey: 'postId' })
}

module.exports = Comment
