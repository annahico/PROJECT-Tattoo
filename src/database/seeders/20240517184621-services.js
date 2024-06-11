'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Services',
            [
                {
                    service_name: 'Personalized tattoos',
                    description: 'Clients will have the freedom to select unique motifs and designs, completely personalizing their tattoo experience according to their preferences and tastes.',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    service_name: 'Tattoos from the catalog',
                    description: 'We offer the creation of tattoos based on predefined designs in our catalog. Customers can choose from a variety of stylish and tried-and-tested options.',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    service_name: 'Restoration and rejuvenation of works',
                    description: 'We specialize in the restoration and rejuvenation of existing tattoos. Our experts work to improve and renew old tattoos, giving them back their vitality.',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    service_name: 'Piercing and dilators placement',
                    description: 'We offer professional services for the placement of piercings and dilators. Our team guarantees safe procedures and varied styles to meet the individual preferences of our clients.',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    service_name: 'Sale of piercings and other articles',
                    description: 'In addition to our application services, we offer a selection of piercings and other body art related items. Customers can purchase quality products to complement their unique style.',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ],
            {}
        );

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('Services', null, {});
    }
};
