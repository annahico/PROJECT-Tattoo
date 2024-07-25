'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Appointment extends Model {
        static associate(models) {
            Appointment.belongsTo(models.User, {
                as: "user",
                foreignKey: "user_id",
            });

            Appointment.belongsTo(models.Service, {
                as: "service",
                foreignKey: "service_id",
            });

            Appointment.belongsTo(models.User, {
                as: "tattoo_artist",
                foreignKey: "tattoo_artist_id",
            });
        }
    }

    Appointment.init({
        appointment_date: DataTypes.DATE,
        user_id: DataTypes.INTEGER,
        service_id: DataTypes.INTEGER,
        tattoo_artist_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Appointment',
    });

    return Appointment;
};
