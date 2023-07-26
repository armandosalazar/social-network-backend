const posts = [];

module.exports = require('express').Router()
    .get('/', (req, res) => {
        res.send(posts);
    })
    .post('/', (req, res) => {
        const post = req.body;

        posts.push(post);

        res.send(post);
    });