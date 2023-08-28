const mysql = require('mysql2')

const pool = mysql.createPool({
    host : "localhost",
    database : "workshop-2",
    user : "root",
    port : 3308,
    password : "dev@62003" 
});

module.exports = pool.promise();

