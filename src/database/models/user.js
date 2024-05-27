'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Asegúrate de que el modelo Role existe y está definido correctamente
      User.belongsTo(models.Role, {
        as: 'role', // alias, se genera un método especial
        foreignKey: "role_id",
      });
    }
  }

  User.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false, // Añadir restricciones según sea necesario
      validate: {
        notEmpty: true, // Ejemplo de validación
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
        isEmail: true, // Validación de correo electrónico
        notEmpty: true,
      }
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { // Relación con la tabla Role
        model: 'Roles', // Nombre de la tabla en la base de datos
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
