import app from "./app";
const port = process.env.PORT || 3000;
import { AppDataSource } from "./db/conexion";

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("base de datos conectada");
        app.listen(port, () => {
            console.log(`La app esta corriendo en http://localhost:${port}`)
        })
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }

}

main();