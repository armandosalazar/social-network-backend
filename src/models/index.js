const User = require('./User');
const Post = require('./Post');
const Message = require('./Message');
const FavoritePosts = require('./FavoritePosts');
const Comment = require('./Comment');

User.hasMany(Post);
Post.belongsTo(User);

User.belongsToMany(Post, { through: Comment });
Post.belongsToMany(User, { through: Comment });

User.hasMany(Message, { foreignKey: 'senderId' });
Message.belongsTo(User, { foreignKey: 'receiverId' });
User.hasMany(Message, { foreignKey: 'receiverId' });
Message.belongsTo(User, { foreignKey: 'senderId' });

User.belongsToMany(Post, { through: FavoritePosts });
Post.belongsToMany(User, { through: FavoritePosts });

module.exports = {
  User,
  Post,
  Comment,
  Message,
  FavoritePosts,
};
