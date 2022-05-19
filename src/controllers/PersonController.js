// Modelo creado
const Person = require('../models').Person;
// Metodos para el CRUD
// mostrar todos los registros
const getAllPeople = async (req,res) => {
    try{
        const people = await Person.findAll();
        res.json(people);
    } catch(error){
        res.json({status:500, message: error.message});
    }
}
// Mostrar un solo registro
const getPerson = async (req,res) => {
    try {
        const person = await Person.findByPk(req.params.id);
        res.json({status:200, menssage: "Persona encontrada", data: person});
    } catch (error) {
        res.json({status:500, message: error.message});
    }
}
// Crear un registro
const createPerson = async (req, res) => {
    try {
        await Person.create(req.body);
        res.json({status:200, message: "Registro creado correctamente"})
    }catch (error){
        res.json({status:500, message: error.message});
    }
}
// Actualizar registro
const updatePerson = async (req, res) => {
    try{
        await Person.upsert({
            id: req.params.id, 
            rut:req.name.rut,
            name:req.name.name, 
            email:req.body.email,
            phone:req.body.phone,
            type_person_id:req.body.type_person_id,
        });
        res.json({message: "Registro actualizado correctamente"})
    } catch (error){
        res.json({status:500, message: error.message});
    }
}
// Eliminar un registro
const deletePerson = async (req,res) => {
    try {
        Person.destroy({
            where: {id : req.params.id} 
        });
        res.json({message: "Registro eliminado correctamente"})
    } catch (error) {
        res.json({status:500, message: error.message});
    }
}

module.exports = {getAllPeople,getPerson,createPerson, updatePerson, deletePerson}