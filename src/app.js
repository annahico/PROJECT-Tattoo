const express = require('express');
const dotenv = require('dotenv');
const sequelize = require("./database/db.js");
const apiRoutes = require("./database/routes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json()); // Middleware to parse JSON requests

app.get('/api/healthy', (req, res) => {
    res.status(200).json({
        success: true,
        message: "My APP server is healthy"
    });
});

app.use('/api', apiRoutes); // Register API routes

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port: ${PORT}`);
});

sequelize.authenticate().then(() => {
    console.log('🛢️ Database authenticated');
}).catch((error) => {
    console.error('Error authenticating database:', error);
});
