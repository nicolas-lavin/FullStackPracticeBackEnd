const express = require('express');
const {signIn, signUp} = require('../controllers/AuthController');

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);

module.exports = router;