const axios = require('axios');
const search = async (req, res) => {
    try {
        const topic = req.params.topic;
        const catalogUrl = `${process.env.CATALOG_SERVICE_URL}/search/${topic}`;
        const response = await axios.get(catalogUrl);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: `${err.message} : error searching on books in req to catalog service` });
    }
};

module.exports = { search };
