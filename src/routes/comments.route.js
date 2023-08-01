const { Router } = require('express');
const commentsRoute = [
  {
    id: 1,
    username: 'John',
    content: 'Hello World',
  },
  {
    id: 2,
    username: 'Jane',
    content: 'Hi, John',
  },
  {
    id: 3,
    username: 'John',
    content: 'How are you?',
  },
  {
    id: 4,
    username: 'Jane',
    content: 'I am fine',
  },
  {
    id: 5,
    username: 'John',
    content: 'Good to hear that',
  },
  {
    id: 6,
    username: 'Jane',
    content: 'Bye',
  },
  {
    id: 1,
    username: 'John',
    content: 'Hello World',
  },
  {
    id: 2,
    username: 'Jane',
    content: 'Hi, John',
  },
  {
    id: 3,
    username: 'John',
    content: 'How are you?',
  },
  {
    id: 4,
    username: 'Jane',
    content: 'I am fine',
  },
  {
    id: 5,
    username: 'John',
    content: 'Good to hear that',
  },
  {
    id: 6,
    username: 'Jane',
    content: 'Bye',
  },
];

const router = Router();

router.get('/', (req, res) => {
  res.json(commentsRoute);
});

module.exports = router;
