const axios = require('axios');
const purchase =async (req, res)=>{
    const itemId = parseInt(req.params.item_number);
    try {
        const catalogResponse = await axios.get(`${process.env.CATALOG_SERVICE_URL}/info/${itemId}`);
        const book = catalogResponse.data;
        if (book.quantity > 0) {
            await axios.post(`${process.env.CATALOG_SERVICE_URL}/update/${itemId}`, {
                quantity: book.quantity - 1
            });
            res.json({ message: `Successfully purchased book: ${book.title}` });
        } else {
            res.status(400).json({ error: 'Book out of stock' });
        }
    }catch (err) {
        res.status(500).json({ error: `'${err}error in purchase  books in req to order service' `});
    }
}
module.exports = {purchase};