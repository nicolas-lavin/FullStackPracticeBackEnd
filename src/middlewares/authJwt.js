const User = require('../models').User;
const jwt = require('jsonwebtoken');

const verifyToken = async(req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        if (!token) return res.status(403).json({message: "No se ha entregado un token"});
        const decoded = jwt.verify(token,process.env.APP_SECRET);
        const user = await User.findById(decoded.id);
        if(!user) return res.status(404).json({message: "Usuario no encontrado"});
        next();
    } catch (error) {
        return res.status(401).json({message: "No Autorizado"});
    }
}

module.exports = {verifyToken}