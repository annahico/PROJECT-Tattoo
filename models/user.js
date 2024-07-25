'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.belongsTo(models.Role, {
                as: 'role',
                foreignKey: "role_id",
            });

            User.hasMany(models.Appointment, {
                as: "appointments",
                foreignKey: "user_id",
            });
        }
    }

    User.init({
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: true,
            }
        },
        password_hash: {
            type: DataTypes.STRING, // Ensure this line is included for the password_hash column
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Roles',
                key: 'id',
            }
        },
    }, {
        sequelize,
        modelName: 'User',
    });

    return User;
};
