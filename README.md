<h1 align="center"> PROJECT BACKEND: TATTOO STUDIO </h1>

<image src="./img/tattoo studio.png" alt="Tattoo Studio">


## Table of Contents :file_folder:

1. [Description :classical_building:](#description-classical_building)
2. [Stack :gear:](#stack-gear) 
3. [Project :open_book:](#development-progress-open_book) 
4. [Bugs :boom:](#bugs-boom) 
5. [Link :dart:](#link-dart) 
6. [Author :wave:](#author-wave) 


***
## Description :classical_building:


Backend development for appointment management for a tattoo studio.
***

## Stack :gear:

![Static Badge][def7]

![Static Badge][def9]

![Static Badge][def3]

![Static Badge][def]

![Static Badge][def2]

![Static Badge][def11]

![Static Badge][def10]

![Static Badge][def8]

![Static Badge][def5]

![Static Badge][def6]

***

## Project :open_book:

<image src="./img/mysql_table.png" alt="Tattoo Studio">

### 1 - Local Installation:

- Clone repository.
- `npm install`.
- Start Docker.
- Start MySql.
- Create a new schema to import data.
- Fill .env and bd.ts files with the corresponding data.
- `npm run dev`.
- `npm run run-migrations`.
- Copy the data from the SQL folder into MySQL and execute the import.
- Import file CollectorProject4Backend_GimenoBayonaMarta for Thunder Client.

### 2 - Enpoints:

NOTE: All user passwords are: 123456

1. Register and Log:

-Register Endpoint:

POST`localhost:4000/api/auth/register`

body:

```
{
  "firstName": "Carmen",
  "secondName": "Usuaria",
  "email": "soyusercarmen@email.com",
  "password": "123456"
}
```
<image src="./img/exampleRegistred.png" alt="register">

- Log Endpoint.

POST`localhost:4000/api/auth/login`

body:

```
{
  "email": "super_admin@email.com",
  "password": "123456"
}
```
<image src="./img/exampleLog.png" alt="log">

2. Users:

- View all users:

body:

```
{
  "email": "super_admin@email.com",
  "password": "123456"
}
```
Bearer Token: 

add token super_admin.

<image src="./img/viewAllUsers.png" alt="viewAllUsers">

- View user profile:

Bearer token:

add user token.

<image src="./img/view user profile.png" alt="viewProfile">

- Modified user profile:

body:

```
{
  "firstName": "add new name",
}
```

Bearer token:

add user token.

<image src="./img/modified user profile.png" alt="modified profile">

- Delete user:

Bearer token:

add super_admin token.

<image src="./img/delete user.png" alt="delete user">


3. Appointments:

4. Services:





***

## Bugs :boom:



***

## Link :dart:

https://github.com/MartaGBayona/project_BackEnd.git

***
## Author :wave:

- **Marta Gimeno Bayona**
- [GitHub](https://github.com/MartaGBayona) - [LinkedIn](https://www.linkedin.com/in/martagbayona/)




[def]: https://img.shields.io/badge/EXPRESS.js-green?style=for-the-badge&logo=TS
[def2]: https://img.shields.io/badge/NODE.JS-darkgreen?style=for-the-badge&logo=TS
[def3]: https://img.shields.io/badge/TYPESCRIPT-blue?style=for-the-badge&logo=TS
[def4]: https://img.shields.io/badge/MYSQL-blue?style=for-the-badge&logo=TS
[def5]: https://img.shields.io/badge/GIT-red?style=for-the-badge&logo=TS
[def6]: https://img.shields.io/badge/GITHUB-black?style=for-the-badge&logo=TS
[def7]: https://img.shields.io/badge/DOCKER-lightblue?style=for-the-badge&logo=TS
[def8]: https://img.shields.io/badge/MYSQL-darkblue?style=for-the-badge&logo=TS
[def9]: https://img.shields.io/badge/VSCODE-blue?style=for-the-badge&logo=TS
[def10]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=TS
[def11]: https://img.shields.io/badge/TYPEORM-darkred?style=for-the-badge&logo=TS