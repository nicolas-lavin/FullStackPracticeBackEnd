const express = require('express');
const {createRegistration} = require('../controllers/RegistrationController');

const router = express.Router();

router.post('/',createRegistration);

module.exports = router;