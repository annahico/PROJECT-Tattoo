const path = require('path');
const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
require("dotenv").config();

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], {
        dialectOptions: {
            timezone: 'local',
        }
    });
} else {
    sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
    );
}

module.exports = sequelize;
