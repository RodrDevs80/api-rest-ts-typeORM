import { Request, Response } from "express";
import { Profesor } from "../models/profesorModel";

class ProfesoresController {
  constructor() {

  }
  async consultar(req: Request, res: Response) {
    try {
      const allprofesor = await Profesor.find();
      res.status(200).json(allprofesor);
    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }
  }
  async consultarEnDetalle(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const resgistro = await Profesor.findOneBy({ id: id });
      if (!resgistro) {
        res.status(404).json({ msg: `Profesor id:${id} no encontrado` })
      }
      res.status(200).json({ msg: `consultando sobre el profesor id:${id}` })

    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }
  }
  async ingresar(req: Request, res: Response) {
    try {
      //const { dni, nombre, apellido, email, profesion, telefono } = req.body
      const newProfesor = await Profesor.save(req.body);
      res.status(201).json({ msg: 'Se creo el profesor con los siguientes datos:', newProfesor })
    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }
  }
  async actualizar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const resgistro = await Profesor.findOneBy({ id: id });
      if (!resgistro) {
        res.status(404).json({ msg: `Profesor id:${id} no encontrado` })
      } else {
        await Profesor.update({ id: id }, req.body);
        const uptadeProfesor = await Profesor.findOneBy({ id: id });
        res.status(200).json({
          msg: `Se actualizo el profesor con el ID:${id}`,
          actualizado: uptadeProfesor
        })
      }
    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }

  }
  async borrar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const resgistro = await Profesor.findOneBy({ id: id });
      if (!resgistro) {
        res.status(404).json({ msg: `Profesor id:${id} no encontrado` });
      } else {
        await Profesor.delete({ id: id });
        res.status(200).json({ msg: `Se borro con éxito el profesor con el  id:${id}`, borrado: resgistro });
      }
    } catch (error) {
      if (error instanceof Error) res.status(500).send(error.message);
    }
  }
}


export default new ProfesoresController();