const router = require('express').Router();

const auth = require('./auth.route');
const posts = require('./posts');
const users = require('./users');
const comments = require('./comments.route');
const notifications = require('./notifications');
const messages = require('./messages.route');

router.use('/auth', auth);
router.use('/users', users);
router.use('/posts', posts);
router.use('/comments', comments);
router.use('/notifications', notifications);
router.use('/messages', messages);

module.exports = router;
