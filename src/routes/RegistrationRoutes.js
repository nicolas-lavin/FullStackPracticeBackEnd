const express = require('express');
const { getAllRegistrations, createRegistration } = require('../controllers/RegistrationController');

const router = express.Router();

router.get('/', getAllRegistrations);
router.post('/',createRegistration);

module.exports = router;