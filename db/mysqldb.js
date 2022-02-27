require('dotenv').config()
const mysql = require('mysql');

const connector = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
});

module.exports = connector;