const app = require('./app');
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);

const io = new Server(server);
app.set('io', io);

module.exports = server;
