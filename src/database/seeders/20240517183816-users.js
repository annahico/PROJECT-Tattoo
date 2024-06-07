'use strict';

const bcrypt = require('bcrypt');
const plainPassword = "12345678";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;

    const users = [
      {
        first_name: 'Gandalf',
        last_name: 'The White',
        email: 'admin@example.es',
        password: bcrypt.hasgSync(plainPassword, 10),
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Aragorn',
        last_name: 'Elesar',
        email: 'aragorn@example.es',
        password: bcrypt.hasgSync(plainPassword, 10),
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Legolas',
        last_name: 'Sindar',
        email: 'legolas@example.es',
        password: bcrypt.hasgSync(plainPassword, 10),
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Frodo',
        last_name: 'Baggins',
        email: bcrypt.hasgSync(plainPassword, 10),
        password: '123',
        role_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    // Hash passwords before inserting
    for (let user of users) {
      user.password_hash = await bcrypt.hash(user.password, saltRounds);
      delete user.password;
    }

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
