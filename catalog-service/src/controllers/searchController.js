const db = require('../../db/db');
const search = async (req, res) => {
    try {
        const topic = req.params.topic.toLowerCase();
        db.all('SELECT * FROM books WHERE LOWER(topic) = ?', [topic], (err, results) => {
            if (err) {
                res.status(500).json({ error: 'error query the database' });
                return;
            }
            if (results.length > 0) {
                res.json(results);
            } else {
                res.status(404).json({ error: 'book not found' });
            }
        });

    } catch (err) {
        res.status(500).json({ error: 'error in search for books in catalog service or in  db' });
    }
}
module.exports = { search };
