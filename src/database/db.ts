import "reflect-metadata"

import 'dotenv/config'

import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST ||"localhost",
    port: Number(process.env.DB_PORT) || 3310,
    username: process.env.DB_USER || "root",
    password: process.env.DB_ROOT_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    entities: [],
    synchronize: false,
})