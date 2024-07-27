'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        role_id: 2,
        name: "John",
        surnames: "Blake",
        email: "john@example.com",
        phone: 611111111,
        password: "$2b$08$Hh/WjgkD9GgI.LL48ewUNeQhuU3U4xOjomP8Ahtq9qR0hKzEd/5Dq",
        createdAt: "2024-07-26 00:29:322",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 2,
        role_id: 2,
        name: "Mikel",
        surnames: "Bennet",
        email: "bennet@example.com",
        phone: 622222222,
        password: "$2b$08$Hh/WjgkD9GgI.LL48ewUNeQhuU3U4xOjomP8Ahtq9qR0hKzEd/5Dq",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 3,
        role_id: 2,
        name: "Nora",
        surnames: "Spencer",
        email: "nora@example.com",
        phone: 633333333,
        password: "$2b$08$Hh/WjgkD9GgI.LL48ewUNeQhuU3U4xOjomP8Ahtq9qR0hKzEd/5Dq",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 4,
        role_id: 2,
        name: "Simon",
        surnames: "Smith",
        email: "simon@example.com",
        phone: 644444444,
        password: "$2b$08$Hh/WjgkD9GgI.LL48ewUNeQhuU3U4xOjomP8Ahtq9qR0hKzEd/5Dq",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 5,
        role_id: 1,
        name: "Miranda",
        surnames: "Clare",
        email: "miranda@example.com",
        phone: 655555555,
        password: "$2b$08$6gegCSFogFu8kL8WhbN1N.MiRsC6bU3i.HAtvQvwQWbrAyu84vUEC",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 6,
        role_id: 3,
        name: "Caharles",
        surnames: "White",
        email: "charles@example.com",
        phone: 666666666,
        password: "$2a$12$MSAOOXLVW5HV2pJ4mLeXO.CMXjdCMPd2Omwf/uATW9rOJc0GXXSJi",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 7,
        role_id: 3,
        name: "Sarah",
        surnames: "Eames",
        email: "sarah@example.com",
        phone: 777777777,
        password: "$2a$12$MSAOOXLVW5HV2pJ4mLeXO.CMXjdCMPd2Omwf/uATW9rOJc0GXXSJi",
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
