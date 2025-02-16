import { Request, Response } from "express";
import { Estudiante } from "../models/estudianteModel";
class EstudiantesController {
  constructor() {

  }
  async consultar(req: Request, res: Response) {
    try {
      const data = await Estudiante.find();
      res.status(200).json(data);
    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }

  }
  async consultarDetalle(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const registro = await Estudiante.findOneBy({ id: id });
      if (!registro) {
        res.status(404).json({ msg: `Estudiante id:${id} no encontrado` });
      } else {
        res.status(200).json(registro);
      }


    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }

  }
  async ingresar(req: Request, res: Response) {
    try {
      const { dni, nombre, apellido, email } = req.body
      const registro = await Estudiante.save(req.body);
      res.status(201).json({
        msg: 'Se creo el estudiante con éxito',
        registro
      })

    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }

  }
  async actualizar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const registro = await Estudiante.findOneBy({ id: id })
      if (!registro) {
        res.status(404).json({ msg: `Estudiante id:${id} no encontrado` })
      } else {
        await Estudiante.update({ id: id }, req.body);
        const updateEstudiante = await Estudiante.findOneBy({ id: id })
        res.status(200).json({
          msg: `Se actualizo el estudiante id:${id} con éxito`,
          actualizado: updateEstudiante
        })
      }

    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);

    }
  }
  async borrar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const registro = await Estudiante.findOneBy({ id: id });
      if (!registro) {
        res.status(404).json({ msg: `Estudiante id:${id} no encontrado` })
      } else {
        await Estudiante.delete({ id: id });
        res.status(200).json({
          msg: `Se borro con éxito el estudiante con el  id:${id}`,
          borrado: registro
        })
      }
    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }
  }
}
export default new EstudiantesController();