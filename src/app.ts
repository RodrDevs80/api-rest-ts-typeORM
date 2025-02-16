import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import estudiantesRoutes from "./routes/estudiantesRoutes";
import profesoresRoutes from "./routes/profesoresRoutes";
import cursosRoutes from "./routes/cursosRoutes"

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get("/", (req: Request, res: Response) => {
    res.json({ msg: 'API de consulta: Cursos,Profesores,Estudiantes' });
})

//aquí uno las rutas con el index
app.use('/cursos', cursosRoutes);
app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);

export default app;

