const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

const routes = require('./routes');
const { User } = require('./models');
const verifyTokenMiddleware = require('./middleware/verifyToken.middleware');

const app = express();

// middlewares
// !importatnt: the order of the middlewares is important
// use for reading the body of the request
app.use(express.json()); // for parsing application/json
app.use(cors({
  exposedHeaders: ['Authorization'], // https://bobbyhadz.com/blog/axios-get-response-headers
})); // permite que cualquier cliente se conecte a la api
app.use(morgan('dev'));

app.use('/api', routes);

// disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
// upload profile picture
const upload = multer({ storage });

app.post('/profile/picture', [verifyTokenMiddleware, upload.single('picture')], async (req, res) => {
  console.log(req.file);
  console.log(req.user);

  await User.update(
    { profilePicture: req.file.filename },
    { where: { id: req.user.id } }
  );

  res.send('Profile picture uploaded');
});

// serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/ping', (req, res) => {
  res.send('pong');
});

// error handlers
app.use(errorHandler);
app.use(notFoundHandler);

function errorHandler(err, req, res, next) {
  if (err) {
    console.log(err);
    res.status(500).send('Something broke!');
  }
}

function notFoundHandler(req, res, next) {
  // res.status(404).send('Not found');
  res.status(404).json({ error: 'Not found' });
}

module.exports = app;
