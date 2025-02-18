const express = require('express');
const router = express.Router();
const { authenticate } = require('../controllers/authController');
const { removeBackground } = require('../controllers/imageController');

router.post('/remove', authenticate, removeBackground);

module.exports = router;