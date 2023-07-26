module.exports = (server) => {

    server.on('connection', (socket) => {
        console.log('A new connection has been established.');

        console.log(socket.id);

        socket.on('data', (data) => {
            console.log(data);
        });
    });
};