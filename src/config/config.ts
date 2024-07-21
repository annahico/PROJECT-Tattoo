import { Dialect } from 'sequelize/types';

// Interfaz para la configuración de Sequelize
interface SequelizeConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
}

// Configuración para diferentes entornos
const config: { [key: string]: SequelizeConfig } = {
  development: {
    username: "root",
    password: "1452",
    database: "project_backend",
    host: "127.0.0.1",
    dialect: "mysql"  // O el dialecto que estés usando, como 'postgres', 'sqlite', etc.
  },
  test: {
    username: "root",
    password: "1452",
    database: "project_backend",
    host: "127.0.0.1",
    dialect: "mysql"  // O el dialecto que estés usando
  },
  production: {
    username: "root",
    password: "1452",
    database: "project_backend",
    host: "127.0.0.1",
    dialect: "mysql"  // O el dialecto que estés usando
  }
};

export default config;
