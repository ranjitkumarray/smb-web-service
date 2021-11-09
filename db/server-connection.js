// const { createPool } = require('mysql');
// const { Sequelize } = require('sequelize');
// //local setup
// exports.pool = createPool({
//     host: "localhost",
//     user: 'ranjit',
//     password: 'Welcome@123',
//     database: 'learning',
//     connectionLimit: 20
// });
// module.exports = new Sequelize('learning', 'ranjit', 'Welcome@123', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

var pg = require('pg')
const { Sequelize } = require('sequelize');
// prod setup 
exports.pool = new pg.Pool({
    database='offertool',
    user='postgres',
    password='ocpphase01',
    host='ocpphase1.cjmfkeqxhmga.eu-central-1.rds.amazonaws.com',
    max: 20,
    idleTimeoutMillis: 30000

})
module.exports = new Sequelize('offertool', 'postgres', 'ocpphase01', {
    host: 'ocpphase1.cjmfkeqxhmga.eu-central-1.rds.amazonaws.com',
    dialect: 'postgres',
    operatorsAliases: false,
});