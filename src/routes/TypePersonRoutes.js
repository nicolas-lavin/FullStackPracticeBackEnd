const express = require('express');
const {getAllTypePeople} = require('../controllers/TypePersonController');

const router = express.Router();

router.get('/',getAllTypePeople);

module.exports = router;