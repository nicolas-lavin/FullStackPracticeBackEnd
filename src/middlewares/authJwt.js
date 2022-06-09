const User = require('../models').User;
const jwt = require('jsonwebtoken');

const verifyToken = async(req, res, next) => {
    try {
        // Comprobar si se ha enviado el token desde el cliente
        const token = req.headers.authorization;
        if (!token) return res.status(403).json({message: "No se ha entregado un token"});
        // Verificar si el token proporcionado es valido
        const decoded = jwt.verify(token.split(" ")[1],process.env.APP_SECRET);
        const user = await User.findByPk(decoded.id);
        if(!user) return res.status(404).json({message: "Usuario no encontrado"});
        req.user_id = user.id;
        next();
    } catch (error) {
        return res.status(401).json({message: "No Autorizado"});
    }
}

module.exports = {verifyToken}