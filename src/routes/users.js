const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User } = require('../models');

function verifyToken(req, res, next) {
  const authHeader = req.header('Authorization');

  console.log('authHeader: ', authHeader);

  if (!authHeader) {
    return res.status(401).json({
      message: 'Unauthorized!',
      code: res.statusCode,
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, 'secret');

    req.user = payload;

    next();
  } catch (error) {
    console.error(error);

    res.status(401).json({
      message: 'Unauthorized!',
      code: res.statusCode,
    });
  }
}

router.get('/', [verifyToken], async function (req, res) {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  res.json(users);
});

router.post('/', async (req, res) => {
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
