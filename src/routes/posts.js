const posts = require('./posts.json')

module.exports = require('express').Router()
  .get('/', (req, res) => {
    res.json(posts)
  })
  .post('/', (req, res) => {
    const post = req.body

    posts.push(post)

    res.send(post)
  })
