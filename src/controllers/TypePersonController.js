// Modelo creado
const TypePerson = require('../models').TypePerson;
// Metodos para el CRUD
// mostrar todos los registros
const getAllTypePeople = async (req,res) => {
    try{
        const typePeople = await TypePerson.findAll();
        res.json(typePeople);
    } catch(error){
        res.json({status:500, message: error.message});
    }
}

module.exports = {getAllTypePeople}