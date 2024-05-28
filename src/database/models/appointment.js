'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.Service, {
        as: "service",
        foreignKey: "service_id",
      });

      Appointment.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id",
      });
    }
  }
  Appointment.init({
    appointment_date: DataTypes.DATE, // Agregado el campo appointment_date
    user_id: DataTypes.INTEGER, // Agregado el campo user_id
    service_id: DataTypes.INTEGER // Agregado el campo service_id
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};
