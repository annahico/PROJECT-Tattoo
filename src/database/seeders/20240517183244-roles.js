'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Roles',
      [
        {
          id: 1,
          name: 'Super_Admin'
        },
        {
          id: 2,
          name: 'Manager',
        },
        {
          id: 3,
          name: 'Tattoo Artist',
        },
        {
          id: 4,
          name: 'Customer',
        },
      ],
      {}
    );

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Roles', null, {});
  }
};
