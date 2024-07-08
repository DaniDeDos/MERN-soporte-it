import { validationResult } from "express-validator";
import Departamento_Area from "../Schema/DepartamentoArea.js";

const crearDepartamentoArea = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { nombre } = req.body;

  try {
    let departamentoArea = await Departamento_Area.findOne({ nombre });

    if (departamentoArea) {
      return res.status(400).json({ msg: "El departamento ya existe" });
    }

    departamentoArea = new Departamento_Area({ nombre });

    await departamentoArea.save();

    res.status(201).json({ msg: "Departamento creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Hubo un error al crear el departamento" });
  }
};

const getAll_Departamento_Area = async (req, res) => {
  try {
    // Buscar todos los registros de Personal
    const Departamento_Area_List = await Departamento_Area.find();

    // Si no se encontraron registros, enviar un mensaje apropiado
    if (Departamento_Area_List.length === 0) {
      return res
        .status(200)
        .json({ msg: "No hay tipos de personal registrados." });
    }

    // Enviar la lista de tipos de personal
    res.status(200).json(Departamento_Area_List);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Error al obtener la lista de tipos de personal." });
  }
};

export { crearDepartamentoArea, getAll_Departamento_Area };
