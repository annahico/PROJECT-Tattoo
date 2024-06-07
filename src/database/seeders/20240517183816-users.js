'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users',
      [
        {
          first_name: 'Gandalf',
          last_name: 'The White',
          email: 'admin@example.es',
          password_hash: '123456',//esto es un string NO un HASH
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Aragorn',
          last_name: 'Elesar',
          email: 'aragorn@example.es',
          password_hash: '12345',
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Legolas',
          last_name: 'Sindar',
          email: 'legolas@example.es',
          password_hash: '1234',
          role_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          first_name: 'Frodo',
          last_name: 'Baggins',
          email: 'frodo@example.es',
          password_hash: '123',
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
