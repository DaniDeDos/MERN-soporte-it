import { validationResult } from "express-validator";
import Personal from "../Schema/Personal.js";

const crearPersonal = async (req, res) => {
  // Validar errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extraer los datos
  const { tipo_personal } = req.body;

  try {
    // Verificar si el tipo de personal ya existe
    let personal = await Personal.findOne({ tipo_personal });

    if (personal) {
      return res.status(400).json({ msg: "El tipo de personal ya existe" });
    }

    // Crear el nuevo registro de Personal
    personal = new Personal({ tipo_personal });

    // Guardar el registro en la base de datos
    await personal.save();

    res.status(201).json({ msg: "Registro de personal creado exitosamente" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Hubo un error al crear el registro de personal" });
  }
};

const getAllPersonal = async (req, res) => {
  try {
    // Buscar todos los registros de Personal
    const personalList = await Personal.find();

    // Si no se encontraron registros, enviar un mensaje apropiado
    if (personalList.length === 0) {
      return res
        .status(200)
        .json({ msg: "No hay tipos de personal registrados." });
    }

    // Enviar la lista de tipos de personal
    res.status(200).json(personalList);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ msg: "Error al obtener la lista de tipos de personal." });
  }
};

export { crearPersonal, getAllPersonal };
