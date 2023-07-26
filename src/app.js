const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// middlewares
// !importatnt: the order of the middlewares is important
// use for reading the body of the request
app.use(express.json()); // for parsing application/json
app.use(cors());
app.use(morgan('dev'));

app.use('/api/', require('./routes'));

app.get('/ping', (req, res) => {
    res.send('pong');
});


module.exports = app;
