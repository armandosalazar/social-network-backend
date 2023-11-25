const { Router } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    attributes: ['id', 'fullName', 'email', 'password', 'profilePicture'],
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(401).json({
      message: 'Invalid credentials!',
      code: res.statusCode,
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(401).json({
      message: 'Invalid credentials!',
      code: res.statusCode,
    });
  }

  const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });

  res.header('Authorization', `Bearer ${token}`);

  res.status(200).json({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    profilePicture: user.profilePicture,
  });
});

router.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({
      fullName,
      email,
      password: encryptedPassword,
    });

    console.log('User created: ', user.toJSON());

    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user: ', error.errors);

    res.status(400).json({
      code: res.statusCode,
      error: error.errors[0].message,
    });
  }
});

module.exports = router;
