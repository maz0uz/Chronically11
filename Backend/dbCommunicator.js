const express = require('express');
const db = require('./database.js');
const mysql = require('mysql');

const app = express();
const PORT = 5000;

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

app.get('/tweets', (req, res) => {
    const sqlQuery = "SELECT * FROM Tweets"

    connection.query(sqlQuery, (err,data) => {
        if (err)  return res.json(err);
        return res.json(data);
        })
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
