"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const appointmentsRoutes_1 = require("./routes/appointmentsRoutes");
const customersRoutes_1 = require("./routes/customersRoutes");
const galleriesRoutes_1 = require("./routes/galleriesRoutes");
const tattoo_artistsRoutes_1 = require("./routes/tattoo_artistsRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 4000;
app.use('/customer', customersRoutes_1.router);
app.use('/tattoo_artist', tattoo_artistsRoutes_1.router);
app.use('/appoiments', appointmentsRoutes_1.router);
app.use('/gallery', galleriesRoutes_1.router);
db_1.AppDataSource.initialize()
    .then(() => {
    console.log('🛢️  Database authenticated');
    app.listen(PORT, () => {
        console.log(`🚀 Server listening on port: ${PORT}`);
    });
})
    .catch((error) => {
    if (error instanceof Error) {
        console.error('Database initialization error:', error.message);
    }
    else {
        console.error('An unknown error occurred during database initialization');
    }
});
