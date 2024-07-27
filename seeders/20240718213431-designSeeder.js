'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Designs", [
      {
        id: 1,
        artist_id: 1,
        style: "LOTR",
        picture: "../img/tattoo1.jpg",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 2,
        artist_id: 1,
        style: "JHarry Potter",
        picture: "../img/tattoo2.jpg",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 3,
        artist_id: 1,
        style: "Lion",
        picture: "../img/tattoo6.jpg",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 4,
        artist_id: 1,
        style: "Japanese",
        picture: "../img/tattoo7.jpg",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 5,
        artist_id: 1,
        style: "Flower",
        picture: "../img/tattoo8.jpg",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 6,
        artist_id: 2,
        style: "Mandala",
        picture: "../img/tattoo9.jpg",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 7,
        artist_id: 2,
        style: "Crime",
        picture: "../img/tattoo10.jpg",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 8,
        artist_id: 2,
        style: "Viking",
        picture: "../img/tattoo11.jpg",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },

    ]);

  },

  async down(queryInterface, Sequelize) {
  }
};
