const axios = require('axios');
const info = async (req, res) => {
    try {
        const item_number = req.params.item_number;
        const response = await axios.get(`${process.env.CATALOG_SERVICE_URL}/info/${item_number}`);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: `'${err} :error in info on books in req to catalog service'` });
    }
};
module.exports = {info};
