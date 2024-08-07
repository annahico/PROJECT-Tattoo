'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("PaymentData", [
      {
        id: 1,
        user_id: 1,
        cardNumber: "1111111111111111", //Número de tarjeta de crédito (esto normalmente debería estar cifrado por razones de seguridad).
        validThru: "7/26", //Fecha de vencimiento de la tarjeta
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 2,
        user_id: 2,
        cardNumber: "2222222222222222", //Número de tarjeta de crédito (esto normalmente debería estar cifrado por razones de seguridad).
        validThru: "8/26", //Fecha de vencimiento de la tarjeta
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 3,
        user_id: 3,
        cardNumber: "3333333333333333", //Número de tarjeta de crédito (esto normalmente debería estar cifrado por razones de seguridad).
        validThru: "9/26", //Fecha de vencimiento de la tarjeta
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
      {
        id: 4,
        user_id: 4,
        cardNumber: "4444444444444444", //Número de tarjeta de crédito (esto normalmente debería estar cifrado por razones de seguridad).
        validThru: "10/26", //Fecha de vencimiento de la tarjeta
        createdAt: "2024-07-26 00:29:32",
        updatedAt: "2024-07-26 00:29:32",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
