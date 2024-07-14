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
                    id: 1,
                    first_name: 'Gandalf',
                    last_name: 'The White',
                    email: 'admin@example.es',
                    password_hash: bcrypt.hashSync(plainPassword, 10),
                    role_id: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    first_name: 'Aragorn',
                    last_name: 'Elesar',
                    email: 'manager@example.es',
                    password_hash: bcrypt.hashSync(plainPassword, 10),
                    role_id: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 3,
                    first_name: 'Legolas',
                    last_name: 'Sindar',
                    email: 'tatto-artist@example.es',
                    password_hash: bcrypt.hashSync(plainPassword, 10),
                    role_id: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 4,
                    first_name: 'Gimli',
                    last_name: 'son of Glöin',
                    email: 'gimli@example.es',
                    password_hash: bcrypt.hashSync(plainPassword, 10),
                    role_id: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 5,
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

        await queryInterface.bulkDelete('Users', null, {});
    }
};
