const { Sequelize } = require('sequelize');
const mysql = require('mysql2');

(function () {
  const connection = mysql.createConnection({
    host: 'socialnetwork.mysql.database.azure.com',
    user: 'user',
    password: 'X100juntos@',
  });

  connection.query('CREATE DATABASE IF NOT EXISTS social_network_schema CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;', function (err, results, fields) {
    if (err) throw err;
    console.log('\x1b[35m[*]\x1b[0m \x1b[32m%s\x1b[0m', 'Database created successfully');
  });

  connection.end();
})();

const sequelize = new Sequelize('social_network_schema', 'user', 'X100juntos@', {
  host: 'socialnetwork.mysql.database.azure.com',
  dialect: 'mysql',
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
      reason
    );
  });

module.exports = sequelize;
