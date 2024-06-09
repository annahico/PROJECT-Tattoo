# REST API for Appointment Management in a Tattoo Studio
<img src="https://slm-assets.secondlife.com/assets/25494302/original/BareFlamboyantAngwantibo-size_restricted.gif?1579883171" width="1000" />

## Description

The project consists of developing a REST API for managing appointments in a tattoo studio. The API will allow users to perform operations such as creating, listing, updating and deleting services, managing users and appointments.

## Content 🗂️

- [Stack](#stack)
- [Features](#features)
- [Endpoints](#enpoints)
- [DataBase](#database)
- [Install](#install)
- [Implementation](#implementation)
- [Developer](#developer)

## <a id="stack">Stack</a>
- ORM: ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
- Language: ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- Framework: ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## <a id="features">Features</a>

- User Registration and Login
- User Management
- Service Management
- Appointment Management

## <a id="enpoints">Endpoints</a>

### Authentication

| Method | URI                           | Action                |
|--------|-------------------------------|------------------------|
| POST   | `/api/auth/register`          | Registro de usuarios   |
| POST   | `/api/auth/login`             | Login de usuarios      |

### Users

| Method | URI                                    | Action                       | Rol         |
|--------|----------------------------------------|------------------------------|-------------|
| GET    | `/api/users`                           | Ver todos los usuarios       | Super Admin |
| GET    | `/api/users/profile`                   | Ver perfil de usuario        |             |
| PUT    | `/api/users/profile`                   | Modificar datos del perfil   |             |
| GET    | `/api/users?email=ejemplo@ejemplo.com` | Filtrar usuario por email    | Super Admin |
| DELETE | `/api/users/:id`                       | Eliminar usuario             | Super Admin |
| PUT    | `/api/users/:id/role`                  | Cambio de role               | Super Admin |
| GET    | `/api/users/tattoo_artist`             | Listara Todos los tatuadores | Super Admin |


### Appointments

| Method | URI                     | Action                | Rol  |
|--------|-------------------------|-----------------------|------|
| POST   | `/api/appointments`     | Crear cita            |      |
| PUT    | `/api/appointments`     | Actualizar mi cita    |      |
| GET    | `/api/appointments/:id` | Recuperar cita        |      |
| GET    | `/api/appointments`     | Ver mis propias citas |      |


### Services

| Method | URI                 | Action               | Rol         |
|--------|---------------------|-----------------------|-------------|
| GET    | `/api/services`     | Ver mis propias citas |             |
| POST   | `/api/services`     | Crear cita            | Super Admin |
| PUT    | `/api/services/:id` | Actualizar mi cita    | Super Admin |
| GET    | `/api/services/:id` | Recuperar cita        | Super Admin |

## <a id="database">DataBase</a>
![Database](./img/Database.png)

## <a id="install">Install </a>

In order to use this project, follow the following steps:
- Open your terminal or command line and run the following command to clone the repository from GitHub
```sh
    git clone https://github.com/annahico/PROJECT-Tattoo.git
```
- Once the repository is cloned, access the project directory.
- Open the project folder in your favorite text editor or IDE and open the terminal
- Run the following command to install the project and all required packages.
```sh
    npm install
```

## <a id="implementation">Implementation </a>
- Create a .env file and copy what is in .env.example, but based on the information from your local database instance.
- Place the credentials and name of the database in the config file.
- Create Database
- Run migrations
```sh
    npm run migrate
```
- Run Seeders
```sh
    npm run seed
```
- Run Project
```sh
    npm run dev
```
- Now in Postman you can consult each of the endpoints.
## <a id="developer">Developer</a>

## Link :dart:

https://github.com/annahico/PROJECT-Tattoo


***
## Author :wave:

- **Anna Hidalgo Costa**
- [GitHub](https://github.com/annahico) - [LinkedIn](https://www.linkedin.com/in/annahico/)

