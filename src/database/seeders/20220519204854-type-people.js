'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TYPE_PEOPLE', [{
      description: 'Administrativo',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      description: 'Estudiante',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      description: 'Profesor',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      description: 'Externo',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TYPE_PEOPLE', null, {});
  }
};
