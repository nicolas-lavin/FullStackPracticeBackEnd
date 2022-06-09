const express = require('express');
const {signIn, signUp, refreshToken, logout, getUserProfile} = require('../controllers/AuthController');
const { verifySignUp, authJwt } = require("../middlewares");
const router = express.Router();

router.post('/signup',[verifySignUp.checkDuplicateUsernameOrEmail],signUp);
router.post('/signin', signIn);
router.post('/refreshToken',refreshToken);
router.get('/user',[authJwt.verifyToken],getUserProfile);
router.delete('/logout',[authJwt.verifyToken],logout);

module.exports = router;