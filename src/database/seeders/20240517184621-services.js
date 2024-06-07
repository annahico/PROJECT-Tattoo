'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Services', 
    [
      {
        service_name: 'Tattoo 1',
        description: 'banner of Rohan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        service_name: 'Tattoo 2',
        description: 'banner of Gondor',
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
