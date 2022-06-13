const express = require('express');
const {getAllPeople,getPerson,createPerson, updatePerson, deletePerson} = require('../controllers/PersonController');
//const { authJwt } = require("../middlewares");
const router = express.Router();

router.get('/',getAllPeople);
router.get('/:id',getPerson);
router.post('/',createPerson);
router.put('/:id',updatePerson);
router.delete('/:id', deletePerson);

module.exports = router;