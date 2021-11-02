const { createPool } = require('mysql');
const { Sequelize } = require('sequelize');

exports.pool = createPool({
    host: "localhost",
    user: 'ranjit',
    password: 'Welcome@123',
    database: 'learning',
    connectionLimit: 20
});
module.exports = new Sequelize('learning', 'ranjit', 'Welcome@123', {
    host: 'localhost',
    dialect: 'mysql'
});