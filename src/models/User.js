'use strict';
const { Model } = require('sequelize');
const bcrypt  = require('bcryptjs'); 

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static encryptPassword = async (password) => {
      const salt = await bcrypt.genSalt(10)
      return await bcrypt.hash(password, salt);
    }

    static comparePassword = async (password, receivePassword) => {
      return await bcrypt.compare(password, receivePassword);
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    userName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};