'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Registration.belongsTo(models.Person,{
        foreignKey: 'person_id',
      });
    }
  }
  Registration.init({
    registration_date: DataTypes.DATE,
    person_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'REGISTRATIONS',
    modelName: 'Registration',
  });
  return Registration;
};