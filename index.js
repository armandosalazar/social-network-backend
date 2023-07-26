const server = require('./src/server');
const { PORT } = require('./src/config');

server.listen(PORT);
console.log(`🚀 Server is running at port: ${PORT}`);