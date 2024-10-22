const express = require('express');
const { login, getProfile } = require('../controllers/authController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

const router = express.Router();

// login route
router.post('/login', login);

// Profile Route
router.get('/me', protect, adminOnly, getProfile);

module.exports = router;