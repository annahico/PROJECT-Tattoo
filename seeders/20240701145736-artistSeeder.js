'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Artists", [
      {
        id: 1,
        user_id: 6,
        name: "Lena",
        portfolio: "",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 2,
        user_id: 7,
        name: "Patrick",
        portfolio: "",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
