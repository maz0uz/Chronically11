const express = require('express');
const db = require('./database');

const app = express();
const PORT = 5000;

app.get('/data', (req, res) => {
    db.query('SELECT * FROM Tweets', (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json([results]);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
