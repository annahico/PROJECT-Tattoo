"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Configuración para diferentes entornos
const config = {
    development: {
        username: "root",
        password: "1452",
        database: "project_backend",
        host: "127.0.0.1",
        dialect: "mysql" // O el dialecto que estés usando, como 'postgres', 'sqlite', etc.
    },
    test: {
        username: "root",
        password: "1452",
        database: "project_backend",
        host: "127.0.0.1",
        dialect: "mysql" // O el dialecto que estés usando
    },
    production: {
        username: "root",
        password: "1452",
        database: "project_backend",
        host: "127.0.0.1",
        dialect: "mysql" // O el dialecto que estés usando
    }
};
exports.default = config;
