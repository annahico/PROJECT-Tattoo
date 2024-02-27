import "reflect-metadata"

import "dotenv/config"

import { DataSource } from "typeorm"
import { Services1708979595312 } from "./migrations/1708979595312-services"
import { Roles1708979493107 } from "./migrations/1708979493107-roles"
import { Users1708974801136 } from "./migrations/1708974801136-users"
import { Appointments1708979680826 } from "./migrations/1708979680826-appointments"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST ||"localhost",
    port: Number(process.env.DB_PORT) || 3310,
    username: process.env.DB_USER || "root",
    password: process.env.DB_ROOT_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    entities: [],
    migrations: [
        Roles1708979493107,
        Services1708979595312,
        Users1708974801136,
        Appointments1708979680826
    ],
    synchronize: false,
    logging: false
})