import { DataSource } from "typeorm";
import { Curso } from "../models/cursoModel";
import { Estudiante } from "../models/estudianteModel";
import { Profesor } from "../models/profesorModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Sertec2580$",
    database: "cursos_ts",
    synchronize: false,
    logging: true,
    entities: [Curso, Estudiante, Profesor]
})
