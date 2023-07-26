module.exports = require('express').Router()
    .post('/', (req, res) => {
        console.log(req.body);

        res.send(req.body);
    });