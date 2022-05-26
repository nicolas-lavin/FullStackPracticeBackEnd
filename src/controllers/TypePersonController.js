// Modelo creado
const TypePerson = require('../models').TypePerson;
// Metodos para el CRUD
// mostrar todos los registros
const getAllTypePeople = async (req,res) => {
    try{
        const typePeople = await TypePerson.findAll();
        res.status(200).json(typePeople);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {getAllTypePeople}