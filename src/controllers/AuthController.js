// Modelo creado
const User = require('../models').User;
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    const {userName, firstName, lastName, email, password } = req.body;
    const newUser = await User.create({
        userName,
        firstName,
        lastName,
        email,
        password: await User.encryptPassword(password)
    });

    const token = jwt.sign({id: newUser.id}, process.env.APP_SECRET, {
        expiresIn: 86400 // 24 hrs
    });
    res.status(200).json({token});
}

const signIn = async (req, res) => {
    const userFound = await User.findOne({where: {userName: req.body.userName}}); // find user
    if(!userFound) return res.status(400).json({message: 'Usuario o Contraseña invalidas'}); // if user is not found will send a message
    const matchPassword = await User.comparePassword(req.body.password, userFound.password); 
    if(!matchPassword) return res.status(401).json({token: null, message: 'Usuario o Contraseña invalidas'}); // if user password is not match will send a message

    const token = jwt.sign({id: userFound.id}, process.env.APP_SECRET, {
        expiresIn: 86400 // 24 hrs
    });
    res.status(200).json({token});
}

module.exports = {signIn, signUp}