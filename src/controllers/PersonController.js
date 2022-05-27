// Modelo creado
const Person = require('../models').Person;
const TypePerson = require('../models').TypePerson;
// Metodos para el CRUD
// mostrar todos los registros
const getAllPeople = async (req,res) => {
    try{
        const people = await Person.findAll({ include: TypePerson });
        res.status(200).json(people);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}
// Mostrar un solo registro
const getPerson = async (req,res) => {
    try {
        const person = await Person.findByPk(req.params.id);
        res.status(200).json({message: "Persona encontrada", data: person});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
// Crear un registro
const createPerson = async (req, res) => {
    try {
        await Person.create(req.body);
        res.status(200).json({message: "Registro creado correctamente"})
    }catch (error){
        res.status(500).json({message: error.message});
    }
}
// Actualizar registro
const updatePerson = async (req, res) => {
    try{
        await Person.upsert({
            id: req.params.id, 
            rut:req.body.rut,
            name:req.body.name, 
            email:req.body.email,
            phone:req.body.phone,
            type_person_id:req.body.type_person_id,
        });
        res.status(200).json({message: "Registro actualizado correctamente"});
    } catch (error){
        res.status(500).json({message: error.message});
    }
}
// Eliminar un registro
const deletePerson = async (req,res) => {
    try {
        Person.destroy({
            where: {id : req.params.id} 
        });
        res.status(200).json({message: "Registro eliminado correctamente"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {getAllPeople,getPerson,createPerson, updatePerson, deletePerson}