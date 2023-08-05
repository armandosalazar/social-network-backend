const app = require('./app');
const http = require('http');
const SocketIO = require('socket.io');

const server = http.createServer(app);

// socket
const io = SocketIO(server);
// save the io instance in the app
app.set('io', io);


module.exports = server;
