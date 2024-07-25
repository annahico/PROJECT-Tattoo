'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Artists", [
      {
        id: 1,
        user_id: 6,
        name: "Carlos",
        portfolio: "",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
      {
        id: 2,
        user_id: 7,
        name: "Cesar",
        portfolio: "",
        createdAt: "2023-09-02 00:29:32",
        updatedAt: "2023-09-02 00:29:32",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
