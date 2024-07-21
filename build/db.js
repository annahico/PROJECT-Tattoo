"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const _1698340010084_create_table_customers_1 = require("./migrations/1698340010084-create-table-customers");
const _1698391283123_create_table_tattoo_artists_1 = require("./migrations/1698391283123-create-table-tattoo_artists");
const _1698391359437_create_table_appoiments_1 = require("./migrations/1698391359437-create-table-appoiments");
const _1698392105148_create_table_galleries_1 = require("./migrations/1698392105148-create-table-galleries");
const Appointment_1 = require("./models/Appointment");
const Customer_1 = require("./models/Customer");
const Gallery_1 = require("./models/Gallery");
const Tattoo_artist_1 = require("./models/Tattoo_artist");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1452",
    database: "project_backend",
    entities: [Gallery_1.Gallery, Customer_1.Customer, Tattoo_artist_1.Tattoo_artist, Appointment_1.Appointment],
    migrations: [
        _1698340010084_create_table_customers_1.CreateTableCustomers1698340010084,
        _1698391283123_create_table_tattoo_artists_1.CreateTableTattooArtists1698391283123,
        _1698391359437_create_table_appoiments_1.CreateTableAppoiments1698391359437,
        _1698392105148_create_table_galleries_1.CreateTableGalleries1698392105148
    ],
    synchronize: false,
    logging: false,
});
// export { AppDataSource }
