const express = require('express');
const router = express.Router();
const { downloadInstagram } = require('../controllers/downloadController');

// POST request to /api/download
router.post('/', downloadInstagram);

module.exports = router;
