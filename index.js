const server = require('./src/server');
const sequelize = require('./src/connection');
const { PORT } = require('./src/config');

sequelize.sync({ force: false });

server.listen(PORT);
console.log(`🚀 Server is running at port: ${PORT}`);
