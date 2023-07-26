const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use('/api/', require('./routes'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/ping', (req, res) => {
    res.send('pong');
});


module.exports = app;
