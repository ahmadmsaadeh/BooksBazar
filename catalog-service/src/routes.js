const express = require('express');
const router = express.Router();

const { search } = require('./controllers/searchController');
const { info }   = require('./controllers/infoController');
const { update } = require('./controllers/updateController');

router.get('/search/:topic', search);
router.get('/info/:item_number', info);
router.post('/update/:item_number', update);

module.exports= router;