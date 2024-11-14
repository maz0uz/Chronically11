const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'chronicallyswe.c1ikges4mouc.eu-north-1.rds.amazonaws.com',
    user: 'root',
    password: 'swedatabase',
    database: 'chronically'
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = connection;
