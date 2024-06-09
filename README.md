# REST API: TATTOO STUDIO (backend project)
<img src="./img/logo.gif" width="1000"  alt="Tattoo Studio"/>


## Table of Contents :file_folder:

1. [Description](#description) :classical_building:
2. [Stack](#stack) :gear:
3. [Features](#features)
4. [Endpoints](#enpoints)
5. [DataBase](#database) :open_book:
6. [Installation](#installation)
7. [Implementation](#implementation)
8. [Link](#link) :dart:
9. [Developer](#developer) :wave:

  ## Description

The project consists of developing a REST API for managing appointments in a tattoo studio. The API will allow users to perform operations such as creating, listing, updating and deleting services, managing users and appointments.

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

| Method | URI                           | Action                 |
|--------|-------------------------------|------------------------|
| POST   | `/api/auth/register`          | User Registration      |
| POST   | `/api/auth/login`             | User login             |

### Users

| Method | URI                                    | Action                       | Rol         |
|--------|----------------------------------------|------------------------------|-------------|
| GET    | `/api/users`                           | View all users               | Super Admin |
| GET    | `/api/users/profile`                   | View user profile            |             |
| PUT    | `/api/users/profile`                   | Modify profile information   |             |
| GET    | `/api/users?email=example@example.com` | Filter user by email         | Super Admin |
| DELETE | `/api/users/:id`                       | Delete user                  | Super Admin |
| PUT    | `/api/users/:id/role`                  | Role change                  | Super Admin |
| GET    | `/api/users/tattoo_artist`             | List all tattoo artists      | Super Admin |


### Appointments

| Method | URI                     | Action                   | Rol  |
|--------|-------------------------|--------------------------|------|
| POST   | `/api/appointments`     | Create appointment       |      |
| PUT    | `/api/appointments`     | Update my appointment    |      |
| GET    | `/api/appointments/:id` | Retrieve appointment     |      |
| GET    | `/api/appointments`     | View my own appointments |      |


### Services

| Method | URI                 | Action                   | Rol         |
|--------|---------------------|--------------------------|-------------|
| GET    | `/api/services`     | View my own appointments |             |
| POST   | `/api/services`     | Create appointment       | Super Admin |
| PUT    | `/api/services/:id` | Update my appointment    | Super Admin |
| GET    | `/api/services/:id` |Retrieve appointment      | Super Admin |

## <a id="database">DataBase</a> :open_book:
<img src="./img/database.pngf" width="1000"  alt="Tattoo Studio"/>

## <a id="installation">Installation </a>

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
- 
## <a id="link">link</a> :dart:

https://github.com/annahico/PROJECT-Tattoo


***
## <a id="developer">Developer</a> :wave:

- **Anna Hidalgo Costa**
- [GitHub](https://github.com/annahico) - [LinkedIn](https://www.linkedin.com/in/annahico/)
