const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ase_schema', 'root', 'hellofriend', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
});

sequelize
  .authenticate()
  .then(function () {
    console.log(
      '\x1b[35m[*]\x1b[0m \x1b[32m%s\x1b[0m',
      'Connection has been established successfully.',
    );
  })
  .catch(function (reason) {
    console.error(
      '\x1b[31m%s\x1b[0m',
      'Unable to connect to the database:',
      reason.message,
    );
  });

module.exports = sequelize;
