const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;
