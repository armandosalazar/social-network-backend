const router = require('express').Router();
const auth = require('./auth');
const subjects = require('./subjects');
const posts = require('./posts');
const users = require('./users');
const comments = require('./comments');
const notifications = require('./notifications');

router.use('/auth', auth);
router.use('/subjects', subjects);
router.use('/users', users);
router.use('/posts', posts);
router.use('/comments', comments);
router.use('/notifications', notifications);

module.exports = router;
