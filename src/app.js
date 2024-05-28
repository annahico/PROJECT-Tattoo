const express = require('express');
const dotenv = require('dotenv');
const sequelize = require("./database/db.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/healthy', (req, res) => {
    res.status(200).json({
        success: true,
        message: "My APP server is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

sequelize.authenticate().then(() => {
    console.log('Database authenticated');
}).catch((error) => {
    console.error('Error authenticating database:', error);
});
