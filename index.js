const server = require('./src/server');
const { PORT } = require('./src/config');
const sequelize = require('./src/database');

sequelize.sync({ force: true });

server.listen(PORT);
console.log(`🚀 Server is running at port: ${PORT}`);