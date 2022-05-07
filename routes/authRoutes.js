const express = require('express');
const router = express.Router();

const { registerUser, loginUser, renewToken, getMe } = require('../controllers/authController');

router.post('/register', registerUser);

router.post('/', loginUser);

router.get('/renew', renewToken);

router.get('/me', getMe);

module.exports = router;