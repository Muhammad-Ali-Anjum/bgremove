const express = require('express');
const router = express.Router();
const { signup, login, authenticate } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', authenticate, (req, res) => res.json(req.user)); // Get user info

module.exports = router;