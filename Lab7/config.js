const { Sequelize } = require('sequelize');

// create a new instance
const sequelize = new Sequelize('test1', 'root', 'root123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
