import { validationResult } from "express-validator";
import Cargo from "../Schema/Cargo.js";

const crearCargo = async (req, res) => {
  // Validar errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extraer los datos
  const { nombre } = req.body;

  try {
    // Verificar si el cargo ya existe
    let cargo = await Cargo.findOne({ nombre });

    if (cargo) {
      return res.status(400).json({ msg: "El cargo ya existe" });
    }

    // Crear el cargo
    cargo = new Cargo({ nombre });

    // Guardar el cargo en la base de datos
    await cargo.save();

    res.status(201).json({ msg: "Cargo creado." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error al crear el cargo" });
  }
};

const getAll_Cargo = async (req, res) => {
  try {
    // Buscar todos los registros de Cargos
    const Cargo_List = await Cargo.find();

    // Si no se encontraron registros, enviar un mensaje apropiado
    if (Cargo_List.length === 0) {
      return res
        .status(200)
        .json({ msg: "No hay cargos registrados." });
    }

    // Enviar la lista de cargos
    res.status(200).json(Cargo_List);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Error al obtener la lista cargos." });
  }
};

export { crearCargo, getAll_Cargo };
