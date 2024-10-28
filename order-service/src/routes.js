const express = require('express');
const router = express.Router();
const { purchase } = require('./controllers/purchaseController');

router.post( '/purchase/:item_number' , purchase);
module.exports = router;
