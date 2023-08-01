const { Router } = require('express');
const { Message } = require('../models');
const verifyTokenMiddleware = require('../middleware/verifyToken.middleware');

const router = Router();

router.get('/{receiverId}', [verifyTokenMiddleware], async (req, res, next) => {
  const { receiverId } = req.params;

  try {
    const messages = await Message.findAll({
      where: {
        senderId: req.user.id,
        receiverId,
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

    console.log(JSON.parse(JSON.stringify(message)));
    res.status(201).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
