'use strict';

const bcrypt = require('bcrypt');
const plainPassword = "12345678";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          first_name: 'Gandalf',
          last_name: 'The White',
          email: 'admin@example.es',
          password_hash: bcrypt.hashSync(plainPassword, 10),
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Aragorn',
          last_name: 'Elesar',
          email: 'aragorn@example.es',
          password_hash: bcrypt.hashSync(plainPassword, 10),
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Legolas',
          last_name: 'Sindar',
          email: 'legolas@example.es',
          password_hash: bcrypt.hashSync(plainPassword, 10),
          role_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Gimli',
          last_name: 'son of Glöin',
          email: 'gimli@example.es',
          password_hash: bcrypt.hashSync(plainPassword, 10),
          role_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Frodo',
          last_name: 'Baggins',
          email: 'frodo@example.es',
          password_hash: bcrypt.hashSync(plainPassword, 10),
          role_id: 4,
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};
