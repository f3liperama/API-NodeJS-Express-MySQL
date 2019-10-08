const Sequelize = require('sequelize');
const { host, username, password, database, connection: dialect } = require('../config/database');

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});


module.exports = sequelize;