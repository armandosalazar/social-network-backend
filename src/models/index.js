const User = require('./User');
const Post = require('./Post');
const Message = require('./Message');

User.hasMany(Post, { as: 'posts', foreignKey: 'userId' });
Post.belongsTo(User, { as: 'users', foreignKey: 'userId' });

// User sender has many messages
User.hasMany(Message, { as: 'sender', foreignKey: 'senderId' });
// User receiver has many messages
User.hasMany(Message, { as: 'receiver', foreignKey: 'receiverId' });
// Message belongs to sender
Message.belongsTo(User, { as: 'users1', foreignKey: 'senderId' });
// Message belongs to receiver
Message.belongsTo(User, { as: 'users3', foreignKey: 'receiverId' });

module.exports = {
  User,
  Post,
  Message,
};
