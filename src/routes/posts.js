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
        include: [
          {
            model: FavoritePost,
            where: {
              userId: req.user.id,
            },
            // Importante porque si no existe el registro en la tabla
            // esto genera un error
            required: false,
          }
        ],
      },
    ],
  });

  if (!posts) {
    return res.status(400).json({ message: 'No posts found' });
  }

  const favoritePost = posts.map((post) => {
    console.log('length: ', post.user.favoritePosts.length);

    if (post.user.favoritePosts.length > 0) {
      for (let i = 0; i < post.user.favoritePosts.length; i++) {
        if (post.user.favoritePosts[i].postId === post.id) {
          post.isFavorite = true;
          break;
        }
      }
    }


    return post;
  });

  console.log('Post: ', JSON.stringify(favoritePost, null, 2));

  res.json(favoritePost);
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
