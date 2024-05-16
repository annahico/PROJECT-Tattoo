### INICIALIZAR PROYECTO NODE
```sh
$ npm init
```

```sh
$ npm install express
```

```sh
$ npm install nodemon -D
```

```sh
$ npm install dotenv
```

1. Creamos archivo .gitignore
```git
/node_modules

.env
```
2. Creamos archivos .env y .env-example

3. Crear carpeta /src en la raiz
```env
PORT=4000
```

4. Creamos dentro de la carpeta /src un fichero app.js

```js
const express = require('express')
// require('dotenev').config()
const dotenv = require('dotenv')
dotenv.config();

const app = express()

const PORT = process.env.PORT || 4000

app.get('/api/healthy', (req, res) => {
  res.status(200).json(
    {
      success: true,
      message: "My APP server is healthy" 
    }
  )
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
```

5. creamos el script dev en el package.json
```json
"dev": "nodemon ./src/app.js",
```

6. Comprobamos que funciona el servidor con el comando:
```sh
$ npm run dev
```


### Sequelize installation
```sh
$ npm install --save sequelize
```
```sh
$ npm install --save mysql2
```
```sh
$ npm install --save-dev sequelize-cli
```

1. Creamos el fichero .sequelizerc
```js
require('dotenv').config(); 
const path = require("path");

module.exports = {
   config: path.resolve("./src/config", "config.json"),
   "models-path": path.resolve("./src/models"),
   "seeders-path": path.resolve("./src/database/seeders"),
   "migrations-path": path.resolve("./src/database/migrations"),
};
```
2. Añadimos variables de entorno al .env y .env example
```env
NODE_ENV=development
DATABASE_URL=mysql://root:1234@localhost:3307
```

```sh
$ npx sequelize-cli init
```

```sh
$ npx sequelize-cli model:generate --name Role --attributes name:string
```

```sh
$ npx sequelize-cli db:migrate
```

```sh
npx sequelize-cli db:migrate:undo
```