const router = require('express').Router();
const { Op } = require('sequelize');

const verifyToken = require('../middleware/verifyToken.middleware');
const { User } = require('../models');

router.get('/', [verifyToken], async function (req, res) {
  const users = await User.findAll({
    where: {
      id: {
        [Op.ne]: req.user.id,
      },
    },
    attributes: {
      exclude: ['password'],
    },
  });

  res.json(users);
});


module.exports = router;
