const { Router } = require('express');
const login = require('../controllers/auth/login');
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        attributes: ['id', 'fullName', 'email', 'password'],
        where: {
            email,
        },
    });


    if (!user) {
        return res.status(401).json({
            code: res.statusCode,
            error: 'Invalid credentials!'
        });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return res.status(401).json({
            code: res.statusCode,
            error: 'Invalid credentials!'
        });
    }

    res.status(200).json({
        code: res.statusCode,
        message: 'Login successful!',
    });

});

module.exports = router;
