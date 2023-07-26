const app = require('./app');
const http = require('http');
const sockets = require('./services/sockets');
const { Server } = require('socket.io');

const server = http.createServer(app);

sockets(new Server(server));

module.exports = server;