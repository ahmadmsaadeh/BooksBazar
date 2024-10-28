const db = require('../../db/db');
const info = async(req, res) => {
    try {
        const id = parseInt(req.params.item_number);
        console.log(req.params.item_number)
        db.get('SELECT * FROM books WHERE id = ?', [id], (err, book) => {
            if (err) {
                res.status(500).json({ error: 'error in query the database' });
                return;
            }
            if (book) {
                res.json(book);
            } else {
                res.status(404).json({ error: 'book not found' });
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'error in search for books in catalog service or in db conn' });
    }
}
module.exports = {info};
