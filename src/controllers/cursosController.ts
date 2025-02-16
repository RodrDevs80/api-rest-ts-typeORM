import { Request, Response } from "express";
import { Curso } from "../models/cursoModel";
import { Profesor } from "../models/profesorModel";
import { Estudiante } from "../models/estudianteModel";

class CursosController {
  constructor() {

  }
  async consultar(req: Request, res: Response) {
    try {
      const allCursos = await Curso.find({ relations: { profesor: true, estudiantes: true } });
      res.status(200).json(allCursos);
    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }
  }
  async consultarDetalle(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const registro = await Curso.findOne({ where: { id }, relations: { profesor: true, estudiantes: true } });
      if (!registro) {
        res.status(404).json({ msg: `Curso id:${id} no encontrado` });
      } else {
        res.status(200).json(registro);
      }
    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);

    }
  }
  async ingresar(req: Request, res: Response) {

    try {
      const { profesor } = req.body
      const profesorb = await Profesor.findOneBy({ id: Number(profesor) });
      if (!profesorb) {
        throw new Error('Profesor no encontrado');
      }
      const newCurso = await Curso.save(req.body);
      res.status(201).json({ msg: `Se creo el curso con éxito`, newCurso: newCurso })
    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }

  }
  async actualizar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const registro = await Curso.findOneBy({ id });
      if (!registro) {
        res.status(404).json({ msg: `Curso id:${id} no encontrado` });
      } else {
        const { profesor } = req.body
        const profesorb = await Profesor.findOneBy({ id: Number(profesor) });
        if (!profesorb) {
          throw new Error('Profesor no encontrado');
        }
        await Curso.update({ id }, req.body);
        const updateCurso = await Curso.findOne({ where: { id }, relations: { profesor: true, estudiantes: true } });
        res.status(200).json({
          msg: `Se actualizo el curso con el ID:${id}`,
          cursoActualizado: updateCurso
        })
      }


    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }
  }
  async borrar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const registro = await Curso.findOneBy({ id });
      if (!registro) {
        res.status(404).json({ msg: `Curso id:${id} no encontrado` });
      } else {
        await Curso.delete({ id });
        res.status(200).json({
          msg: `Se borro con éxito el curso con el  id:${id}`,
          cursoBorrado: registro
        })
      }

    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }
  }
  async asociarEstudiantes(req: Request, res: Response) {
    try {
      const { curso_id, estudiante_id } = req.body
      const registroCurso = await Curso.findOneBy({ id: Number(curso_id) });
      const registroEstudiante = await Estudiante.findOneBy({ id: Number(estudiante_id) });
      if (!registroCurso) {
        throw new Error('El curso no existe')
      } else if (!registroEstudiante) {
        throw new Error('El estudiante no existe')
      } else {
        registroCurso.estudiantes = registroCurso.estudiantes || [];
        registroCurso.estudiantes.push(registroEstudiante);
        const registro = await Curso.save(registroCurso);

        res.status(200).json({ msg: `se registro con éxito al estudiante id:${estudiante_id} en el curso id:${curso_id}`, registro })
      }

    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }
  }
}


export default new CursosController();