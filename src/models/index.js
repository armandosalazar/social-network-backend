const User = require('./User');
const Post = require('./Post');
const Message = require('./Message');

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Message, { foreignKey: 'senderId' });
Message.belongsTo(User, { foreignKey: 'receiverId' });
User.hasMany(Message, { foreignKey: 'receiverId' });
Message.belongsTo(User, { foreignKey: 'senderId' });

module.exports = {
  User,
  Post,
  Message,
};
