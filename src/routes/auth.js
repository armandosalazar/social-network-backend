const { Router } = require('express');
const login = require('../controllers/auth/login');

const router = Router();

router.post('/login', login);

module.exports = router;
