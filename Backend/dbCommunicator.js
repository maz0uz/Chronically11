const express = require('express');
const db = require('./database.js');

const app = express();
const PORT = 5000;

app.get('/tweets/:Category', (req, res) => {
    const tweetCategory = req.params.Category;

    db.query('SELECT * FROM Tweets WHERE categories = ?', [tweetCategory], (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(results);
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
