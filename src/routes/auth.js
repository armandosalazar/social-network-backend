const { Router } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

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
      error: 'Invalid credentials!',
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(401).json({
      code: res.statusCode,
      error: 'Invalid credentials!',
    });
  }

  const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });

  res.header('Authorization', token);

  res.status(200).json({
    code: res.statusCode,
    message: 'Login successful!',
  });
});

module.exports = router;
