'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Services', 
    [
      {
        service_name: 'Tattoo',
        description: 'Umbrella Tattoo',
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
    await queryInterface.bulkDelete('Services', null, {});
  }
};
