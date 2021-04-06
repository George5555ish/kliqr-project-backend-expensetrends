
const mysql = require('mysql');
const mysql2 = require('mysql2');


const db = mysql2.createConnection({
    user: 'sql10402904',
    host: 'sql10.freemysqlhosting.net',
    password: 'pqiZUFlieb',
    database: 'sql10402904',
    port:3306

});


  module.exports = db;