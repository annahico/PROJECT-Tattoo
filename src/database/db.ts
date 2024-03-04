import "reflect-metadata"

import "dotenv/config"

import { DataSource } from "typeorm"

import { Roles1708974801136 } from "./migrations/1708974801136-roles"
import { Users1708979493107 } from "./migrations/1708979493107-users"
import { Services1708979595312 } from "./migrations/1708979595312-services"
import { Appointments1708979680826 } from "./migrations/1708979680826-appointments"

import { Role } from "../models/Role"
import { User } from "../models/User"
import { Service } from "../models/Service"
import { Appointment } from "../models/Appointment"






export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST ||"localhost",
    port: Number(process.env.DB_PORT) || 3310,
    username: process.env.DB_USER || "root",
    password: process.env.DB_ROOT_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    entities: [
        Role,
        User,
        Service,
        Appointment
    ],
    migrations: [
        Roles1708974801136,
        Users1708979493107,
        Services1708979595312,
        Appointments1708979680826
    ],
    synchronize: false,
    logging: false
})