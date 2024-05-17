'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Appointments',
      [
        {
          appointment_date: new Date (),
          user_id: '1',
          service_id: '45',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Appointments', null, {});
  }
};
