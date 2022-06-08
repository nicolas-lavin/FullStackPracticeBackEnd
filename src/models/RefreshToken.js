'use strict';
const { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const config = require('../config/auth.config.js');

module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {

    static createToken = async function (user) {
      let expiredAt = new Date();
  
      expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtRefreshExpiration);
  
      let _token = uuidv4();
  
      let refreshToken = await this.create({
        token: _token,
        user_id: user.id,
        expiryDate: expiredAt.getTime(),
      });
  
      return refreshToken.token;
    };

    static verifyExpiration = (token) => {
      return token.expiryDate.getTime() < new Date().getTime();
    };

    static associate(models) {
      RefreshToken.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'id'
      });
    }
  }
  RefreshToken.init({
    token: DataTypes.STRING,
    expiryDate: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RefreshToken',
  });

  return RefreshToken;
};