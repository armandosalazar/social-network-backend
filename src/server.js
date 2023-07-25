const app = require('./app');
const http = require('http');
const sockets = require('./services/sockets');

const server = http.createServer(app);
sockets(server);

module.exports = server;