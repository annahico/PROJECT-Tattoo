import "dotenv/config";
import { AppDataSource } from "./database/db";
import { app } from "./app";

const PORT = process.env.PORT || 4001;

const startServer = () => {
    AppDataSource.initialize()
        .then(() => {
            console.log("DataBase connected")

            app.listen(PORT, () => {
                console.log(`server is running on port: ${PORT}`)
            })
        })

        .catch(error => {
            console.log(error);
        })
};

startServer();