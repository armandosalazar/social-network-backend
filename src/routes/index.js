const router = require('express').Router();
const users = require('./users');

router.use('/subjects', require('./subjects'));
router.use('/users', users);
router.use('/posts', require('./posts'));

module.exports = router;
