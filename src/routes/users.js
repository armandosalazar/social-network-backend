const router = require('express').Router();
const bcrypt = require('bcrypt');

const verifyToken = require('../middleware/verifyToken.middleware');
const { User } = require('../models');

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
