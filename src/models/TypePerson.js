'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypePerson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TypePerson.hasMany(models.Person,{
        foreignKey: 'type_person_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  TypePerson.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'TYPE_PEOPLE',
    modelName: 'TypePerson',
  });
  return TypePerson;
};