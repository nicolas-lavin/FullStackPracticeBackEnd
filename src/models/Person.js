'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Person.belongsTo(models.TypePerson, {
        foreignKey: 'type_person_id',
      });
      Person.hasMany(models.Registration,{
        foreignKey: 'person_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Person.init({
    rut: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    type_person_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'PEOPLE',
    modelName: 'Person',
  });
  return Person;
};