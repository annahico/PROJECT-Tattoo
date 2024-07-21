import { config } from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateTableCustomers1698340010084 } from "./migrations/1698340010084-create-table-customers";
import { CreateTableTattooArtists1698391283123 } from "./migrations/1698391283123-create-table-tattoo_artists";
import { CreateTableAppoiments1698391359437 } from "./migrations/1698391359437-create-table-appoiments";
import { CreateTableGalleries1698392105148 } from "./migrations/1698392105148-create-table-galleries";
import { Appointment } from "./models/Appointment";
import { Customer } from "./models/Customer";
import { Gallery } from "./models/Gallery";
import { Tattoo_artist } from "./models/Tattoo_artist";

config(); 

export const AppDataSource = new DataSource({
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
    CreateTableGalleries1698392105148,
  ],
  synchronize: false,
  logging: false,
});
