// Modelo creado
const User = require('../models').User;
const RefreshToken = require('../models').RefreshToken;
const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');

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
        expiresIn: config.jwtExpiration
    });

    let refreshToken = await RefreshToken.createToken(newUser);

    res.status(200).json({
        accessToken: token,
        refreshToken: refreshToken
    });
}

const signIn = async (req, res) => {
    const userFound = await User.findOne({where: {userName: req.body.userName}}); // find user
    if(!userFound) return res.status(400).json({message: 'Invalid user or password'}); // if user is not found will send a message
    const matchPassword = await User.comparePassword(req.body.password, userFound.password); 
    if(!matchPassword) return res.status(401).json({accessToken: null, message: 'Invalid user or password'}); // if user password is not match will send a message

    const token = jwt.sign({id: userFound.id}, process.env.APP_SECRET, {
        expiresIn: config.jwtExpiration 
    });

    let refreshToken = await RefreshToken.createToken(userFound);
    
    res.status(200).json({
        accessToken: token,
        refreshToken: refreshToken
    });
}

const refreshToken = async (req, res) => {
    const requestToken = req.headers['x-auth-token'];
    
    if (!requestToken) return res.status(403).json({ message: "Refresh Token is required!" });
  
    try {
      let refreshToken = await RefreshToken.findOne({ where: { token: requestToken } });
  
      if (!refreshToken) return res.status(403).json({ message: "Refresh token doesn't exist!" });
  
      if (RefreshToken.verifyExpiration(refreshToken)) {
        RefreshToken.destroy({ where: { id: refreshToken.id } });
        
        return res.status(403).json({message: "Refresh token was expired. Please make a new signin request"});
      }
  
      const user = await refreshToken.getUser();
      let newAccessToken = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: config.jwtExpiration,
      });
  
      return res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: refreshToken.token,
      });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
};

const logout = async (req, res) => {
    const requestToken = req.header("x-auth-token");
    await RefreshToken.destroy({ where: { token: requestToken } });
    res.sendStatus(204);
}

const getUserProfile = async (req, res) => {
    try {
        const userProf = await User.findByPk(req.user_id);
        const { id, userName, firstName, lastName, email } = userProf;
        res.status(200).json({
            user: {
                id,
                userName,
                firstName,
                lastName,
                email
            }
        });
    } catch (err) {
        res.status(400).json( {message:err });
    }
    
}

module.exports = {signIn, signUp, refreshToken, logout, getUserProfile}