import "reflect-metadata"

import "dotenv/config"

import { DataSource } from "typeorm"
import { Users1708974801136 } from "./migrations/1708974801136-users"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST ||"localhost",
    port: Number(process.env.DB_PORT) || 3310,
    username: process.env.DB_USER || "root",
    password: process.env.DB_ROOT_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    entities: [],
    migrations: [Users1708974801136],
    synchronize: false,
    logging: false
})