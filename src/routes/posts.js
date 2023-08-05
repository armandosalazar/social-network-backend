const { Router } = require('express');
const { Post, User } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const posts = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'fullName'],
        as: 'user',
      },
    ],
    attributes: ['id', 'userId', 'content', 'createdAt', 'updatedAt'],
    order: [['createdAt', 'DESC']],
  });

  console.log('Posts: ', JSON.stringify(posts, null, 2));

  res.json(posts);
});

router.post('/', async (req, res) => {
  const { userId, content } = req.body;

  const post = await Post.create({
    userId,
    content,
  });

  console.log('Post created: ', post.toJSON());

  res.json(post);
});

module.exports = router;
