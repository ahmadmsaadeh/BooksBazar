const db = require('../../db/db'); // Import the SQLite connection
const update = async (req, res) => {
    try {
        const id = parseInt(req.params.item_number);
        const { quantity, price } = req.body;
        db.get('SELECT * FROM books WHERE id = ?', [id], (err, book) => {
            if (err) {
                res.status(500).json({ error: 'error query the database' });
                return;
            }
            if (!book) {
                res.status(404).json({ error: 'Book not found' });
                return;
            }
            const updatedQuantity = quantity !== undefined ? quantity : book.quantity;
            const updatedPrice = price !== undefined ? price : book.price;

            db.run('UPDATE books SET quantity = ?, price = ? WHERE id = ?', [updatedQuantity, updatedPrice, id], (err) => {
                if (err) {
                    res.status(500).json({ error: 'error updating the book in the database' });
                    return;
                }
                res.json({ message: 'Catalog updated successfully', book: { ...book, quantity: updatedQuantity, price: updatedPrice } });
            });
        });

    } catch (err) {
        res.status(500).json({ error: 'Error updating the catalog in catalog service | db' });
    }
}

module.exports = { update };
