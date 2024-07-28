'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;
    const passwords = [
      "password1",
      "password2",
      "password3",
      "password4",
      "password5",
      "password6",
      "password7",
    ];

    const hashedPasswords = await Promise.all(passwords.map(password => bcrypt.hash(password, saltRounds)));

    await queryInterface.bulkInsert("Users", [
      {
        id: 1,
        role_id: 2,
        name: "John",
        surnames: "Blake",
        email: "john@example.com",
        phone: 611111111,
        password: hashedPasswords[0],
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 2,
        role_id: 2,
        name: "Mikel",
        surnames: "Bennet",
        email: "bennet@example.com",
        phone: 622222222,
        password: hashedPasswords[1],
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
        password: hashedPasswords[2],
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
        password: hashedPasswords[3],
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
        password: hashedPasswords[4],
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 6,
        role_id: 3,
        name: "Charles",
        surnames: "White",
        email: "charles@example.com",
        phone: 666666666,
        password: hashedPasswords[5],
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
        password: hashedPasswords[6],
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
