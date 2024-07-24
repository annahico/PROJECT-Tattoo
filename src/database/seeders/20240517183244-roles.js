'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const currentDate = new Date();

        await queryInterface.bulkInsert('Roles',
            [
                {
                    id: 1,
                    name: 'Super_Admin',
                    createdAt: currentDate,
                    updatedAt: currentDate
                },
                {
                    id: 2,
                    name: 'Manager',
                    createdAt: currentDate,
                    updatedAt: currentDate
                },
                {
                    id: 3,
                    name: 'Tattoo Artist',
                    createdAt: currentDate,
                    updatedAt: currentDate
                },
                {
                    id: 4,
                    name: 'Customer',
                    createdAt: currentDate,
                    updatedAt: currentDate
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Roles', null, {});
    }
};
