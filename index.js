const server = require('./src/server');
const { PORT } = require('./src/config');

server.listen(PORT, '192.168.0.30');
console.log(`🚀 Server is running at port: ${PORT}`);