const express = require("express");
const cors = require("cors");
const router = require("./router.js");
const app = express();
const PORT = process.env.PORT || 4000;

// Opciones CORS
const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

// Middleware para parsear JSON
app.use(express.json());

// Aplicar CORS
app.use(cors(corsOptions));

// Usar el router
app.use("/api", router);

// Ruta de salud
app.get("/api/healthy", (req, res) => {
    res.status(200).json({
        success: true,
        message: "My APP server is healthy",
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Server listening on port: ${PORT}`);
});
