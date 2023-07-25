module.exports = (server) => {
    server.on('connection', (socket) => {
        console.log('New connection', socket.id);
    });
};