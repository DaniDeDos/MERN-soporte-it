import { validationResult } from "express-validator";
import DireccionUEB from "../Schema/DireccionUEB.js";

const crearDireccionUEB = async (req, res) => {
  // Validar errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extraer los datos
  const { nombre } = req.body;

  try {
    // Verificar si la dirección UEB ya existe
    let direccionUEB = await DireccionUEB.findOne({ nombre });

    if (direccionUEB) {
      return res.status(400).json({ msg: "La dirección UEB ya existe" });
    }

    // Crear la dirección UEB
    direccionUEB = new DireccionUEB({ nombre });

    // Guardar la dirección UEB en la base de datos
    await direccionUEB.save();

    res.status(201).json({ msg: "Dirección UEB creada exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error al crear la dirección UEB" });
  }
};

const getAllDireccionUEB = async (req, res) => {
  try {
    // Buscar todos los registros de Personal
    const direccionUEBList = await DireccionUEB.find();

    // Si no se encontraron registros, enviar un mensaje apropiado
    if (direccionUEBList.length === 0) {
      return res
        .status(200)
        .json({ msg: "No hay Direccion / UEB registrada." });
    }

    // Enviar la lista de Direccion / UEB
    res.status(200).json(direccionUEBList);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Error al obtener la lista de Direccion / UEB." });
  }
};

export { crearDireccionUEB, getAllDireccionUEB };
