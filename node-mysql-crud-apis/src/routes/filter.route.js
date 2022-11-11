const express = require('express');
const router = express.Router();

const DatafilterController = require('../controllers/filter.controller');

// get all data
router.get('/', DatafilterController.api_call_filter);

module.exports = router;