'use strict';

const bcrypt = require('bcrypt');
const plainPassword = "12345678";

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = bcrypt.hashSync(plainPassword, 10);

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'Gandalf',
          last_name: 'The White',
          email: 'admin@example.es',
          password_hash: hashedPassword, // Usa password_hash en lugar de password
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Aragorn',
          last_name: 'Elesar',
          email: 'aragorn@example.es',
          password_hash: hashedPassword, // Usa password_hash en lugar de password
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Legolas',
          last_name: 'Sindar',
          email: 'legolas@example.es',
          password_hash: hashedPassword, // Usa password_hash en lugar de password
          role_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Frodo',
          last_name: 'Baggins',
          email: 'frodo@example.es',
          password_hash: hashedPassword, // Usa password_hash en lugar de password
          role_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
