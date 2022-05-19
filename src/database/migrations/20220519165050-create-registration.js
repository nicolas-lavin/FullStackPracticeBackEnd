'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('REGISTRATIONS', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      registration_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      person_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'PEOPLE',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('REGISTRATIONS');
  }
};