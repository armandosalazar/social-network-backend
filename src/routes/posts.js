const router = require('express').Router();
const verifyTokenMiddleware = require('../middleware/verifyToken.middleware');
const { Post, User, FavoritePost } = require('../models');

router.get('/', [verifyTokenMiddleware], async (req, res) => {

  const posts = await Post.findAll({
    attributes: ['id', 'userId', 'content', 'createdAt', 'updatedAt'],
    order: [['createdAt', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['id', 'fullName', 'email', 'profilePicture'],
      }
    ]
  });

  if (!posts) {
    return res.status(400).json({ message: 'No posts found' });
  }

  const favorites = await FavoritePost.findAll({
    where: {
      userId: req.user.id,
    },
  });

  posts.forEach((post) => {
    post.dataValues.isFavorite = false;
    favorites.forEach((favorite) => {
      if (post.id === favorite.postId) {
        post.dataValues.isFavorite = true;
      }
    });
  });

  console.log('Posts: ', JSON.stringify(posts, null, 2));

  return res.json(posts);
});

router.post('/', async (req, res) => {
  const { userId, content } = req.body;

  const post = await Post.create({
    userId,
    content,
  });

  const io = req.app.get('io');
  io.emit('new-post', post.toJSON());

  console.log('Post created: ', post.toJSON());

  res.json(post);
});

router.post('/favorite', [verifyTokenMiddleware], async (req, res) => {
  const { postId } = req.body;

  console.log('PostId: ', postId);

  if (await FavoritePost.findOne({
    where: {
      userId: req.user.id,
      postId,
    },
  })) {
    return res.status(400).json({ message: 'Post already favorited' });
  }


  const favoritePost = await FavoritePost.create({
    userId: req.user.id,
    postId,
  });

  if (!favoritePost) {
    return res.status(400).json({ message: 'Post not found' });
  }

  res.json({ message: 'Post favorited' });
});

router.delete('/favorite', [verifyTokenMiddleware], async (req, res) => {
  const { postId } = req.query;

  console.log('PostId: ', postId);

  const favoritePost = await FavoritePost.findOne({
    where: {
      userId: req.user.id,
      postId,
    },
  });

  if (!favoritePost) {
    return res.status(400).json({ message: 'Post not found' });
  }

  await favoritePost.destroy();

  res.json({ message: 'Post unfavorited' });
});



module.exports = router;
