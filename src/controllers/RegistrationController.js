// Modelo creado
const Registration = require('../models').Registration;
// Metodos para el CRUD
// Crear un registro
const createRegistration = async (req, res) => {
    try {
        await Registration.create(req.body);
        res.json({status:200, message: "Registro creado correctamente"})
    }catch (error){
        res.json({status:500, message: error.message});
    }
}
module.exports = {createRegistration}