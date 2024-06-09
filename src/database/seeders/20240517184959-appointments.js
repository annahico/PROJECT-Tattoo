'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Appointments',
      [
        {
          appointment_date: new Date('2024-05-22T11:02:30'),
          user_id: 1,
          service_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          appointment_date: new Date('2024-05-29T11:14:57'),
          user_id: 2,
          service_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Appointments', null, {});
  }
};
