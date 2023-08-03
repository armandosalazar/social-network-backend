const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ase_schema', 'root', 'hellofriend', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
});

try {
  sequelize.authenticate();
  console.log(
    '\x1b[32m%s\x1b[0m',
    'Connection has been established successfully.',
  );
} catch (error) {
  console.error(
    '\x1b[31m%s\x1b[0m',
    'Unable to connect to the database:',
    error.message,
  );
}

module.exports = sequelize;
