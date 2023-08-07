const { Router } = require('express');
const { Message } = require('../models');
const { Op } = require('sequelize');

const verifyTokenMiddleware = require('../middleware/verifyToken.middleware');

const router = Router();

router.get('/:id', [verifyTokenMiddleware], async (req, res, next) => {
  const receiverId = req.params.id;

  console.log('receiverId: ', receiverId);

  try {
    const messages = await Message.findAll({
      where: {
        [Op.or]: [
          { receiverId, senderId: req.user.id },
          { receiverId: req.user.id, senderId: receiverId },
        ],
      },
    });

    res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.post('/', [verifyTokenMiddleware], async (req, res, next) => {
  try {
    const { receiverId, content } = req.body;

    const message = await Message.create({
      senderId: req.user.id,
      receiverId,
      content,
    });

    const io = req.app.get('io');
    io.emit('new-message', message);

    console.log(JSON.parse(JSON.stringify(message)));
    res.status(201).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
