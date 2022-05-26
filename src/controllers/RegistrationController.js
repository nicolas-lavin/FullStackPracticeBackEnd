const { sequelize } = require('../models');
// Modelo creado
const Registration = require('../models').Registration;
const Person = require('../models').Person;
const TypePerson = require('../models').TypePerson;
// Metodos para el CRUD
// Listar Todos los Registros
const getAllRegistrations = async (req, res) => {
    try {
        //const registrations = await Registration.findAll({ include: { all: true, nested: true }});
        const registrations = await Registration.findAll({ include: { model: Person, include:{model: TypePerson}}});
        res.status(200).json(registrations);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
// Crear un registro
const createRegistration = async (req, res) => {
    try {
        const person = await Person.findOne({where: { rut: req.body.rut}});
        if(person){
            await Registration.create({"person_id": person.id, "registration_date": sequelize.literal('CURRENT_TIMESTAMP')});
            res.status(200).json({message: "Registro creado correctamente"});
        }else{
            res.status(500).json({message: "El usuario que está intentando registrar no se encuentra enrolado"});
        }
    }catch (error){
        res.status(500).json({message: error.message});
    }
}
module.exports = {createRegistration, getAllRegistrations}