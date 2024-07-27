'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Appointments", [
      {
        id: 1,
        user_id: 1,
        artist_id: 1,
        date: "2024-06-10",
        hour: "09:00 to 12:00",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 2,
        user_id: 1,
        artist_id: 1,
        date: "2024-13-16",
        hour: "12:00 to 15:00",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 3,
        user_id: 2,
        artist_id: 1,
        date: "2024-05-12",
        hour: "09:00 to 12:00",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 4,
        user_id: 3,
        artist_id: 1,
        date: "2024-04-20",
        hour: "12:00 to 15:00",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 5,
        user_id: 3,
        artist_id: 1,
        date: "2024-03-27",
        hour: "12:00 to 15:00",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 6,
        user_id: 2,
        artist_id: 2,
        date: "2024-05-07",
        hour: "09:00 to 12:00",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 7,
        user_id: 2,
        artist_id: 2,
        date: "2024-07-14",
        hour: "09:00 to 12:00",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 8,
        user_id: 4,
        artist_id: 2,
        date: "2024-01-10",
        hour: "09:00 to 12:00",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 9,
        user_id: 4,
        artist_id: 2,
        date: "2024-02-10",
        hour: "09:00 to 12:00",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
