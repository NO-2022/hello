const express = require('express');
const router = express.Router();

const DataController = require('../controllers/data.controller');

// get all data
router.get('/', DataController.api_call_getalldata);

module.exports = router;