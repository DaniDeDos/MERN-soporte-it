import { validationResult } from "express-validator";
import Nombre from "../Schema/Nombre.js";

const crearNombre = async (req, res) => {
  // Validar errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extraer los datos
  const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido } =
    req.body;

  try {
    // Verificar si el nombre ya existe
    let nombreExistente = await Nombre.findOne({ nombre, apellido });

    if (nombreExistente) {
      return res.status(400).json({ msg: "El nombre ya existe" });
    }

    // Crear el nombre
    const nuevoNombre = new Nombre({
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
    });

    // Guardar el nombre en la base de datos
    await nuevoNombre.save();

    res.status(201).json({ msg: "Nombre creado exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error al crear el nombre" });
  }
};

export { crearNombre };
