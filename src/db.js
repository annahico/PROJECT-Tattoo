"use strict";
require("reflect-metadata");
require("dotenv").config(); // Cargar variables de entorno

const { CreateTableCustomers1698340010084 } = require("./migrations/1698340010084-create-table-customers");
const { CreateTableTattooArtists1698391283123 } = require("./migrations/1698391283123-create-table-tattoo_artists");
const { CreateTableAppoiments1698391359437 } = require("./migrations/1698391359437-create-table-appoiments");
const { CreateTableGalleries1698392105148 } = require("./migrations/1698392105148-create-table-galleries");

const { Appointment } = require("./models/Appointment");
const { Customer } = require("./models/Customer");
const { Gallery } = require("./models/Gallery");
const { Tattoo_artist } = require("./models/Tattoo_artist");

// Configuración de la fuente de datos
const AppDataSource = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Gallery, Customer, Tattoo_artist, Appointment],
    migrations: [
        CreateTableCustomers1698340010084,
        CreateTableTattooArtists1698391283123,
        CreateTableAppoiments1698391359437,
        CreateTableGalleries1698392105148
    ],
    synchronize: false,
    logging: false,
};

module.exports = { AppDataSource };
