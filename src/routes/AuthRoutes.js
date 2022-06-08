const express = require('express');
const {signIn, signUp, refreshToken} = require('../controllers/AuthController');

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/refreshToken',refreshToken);

module.exports = router;