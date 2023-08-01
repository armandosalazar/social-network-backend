const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, { as: 'posts', foreignKey: 'userId' });
Post.belongsTo(User, { as: 'users', foreignKey: 'userId' });

module.exports = {
  User,
  Post,
};
