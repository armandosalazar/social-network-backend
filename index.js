const server = require('./src/server');
const sequelize = require('./src/database');
const { PORT } = require('./src/config');

sequelize.sync({ force: false });
require('./src/models');

server.listen(PORT);
console.log(`🚀 Server is running at port: ${PORT}`);
