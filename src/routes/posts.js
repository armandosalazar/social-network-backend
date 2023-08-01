const { Router } = require('express');
const { Post } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const posts = await Post.findAll();

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
