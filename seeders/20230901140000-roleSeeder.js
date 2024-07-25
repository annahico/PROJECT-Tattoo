'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", [
      {
        id: 1,
        name: "Administrator",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 2,
        name: "Customer",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 3,
        name: "Artist",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
