module.exports = (server) => {

    server.on('connection', (socket) => {
        console.log('A new connection has been established.');
        console.log(socket.id);
        socket.emit('connection', 'Welcome to the ase!');

        socket.on('client:[post]', () => {
            console.log('client:[post]');
            server.emit('server:[post]');
        });

    });
};