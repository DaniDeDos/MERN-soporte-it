import { validationResult } from "express-validator";
import Telefono from "../Schema/Telefono.js";

const crearTelefono = async (req, res) => {
  // Validate errors
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extract the data
  const { numero, tipo, estado } = req.body;

  try {
    // Check if the phone record already exists
    let telefonoExiste = await Telefono.findOne({
      "telefono_info.numero": numero,
    });

    if (telefonoExiste) {
      return res.status(400).json({ msg: "El número de teléfono ya existe" });
    }

    // Create the phone record
    const telefono = new Telefono({
      telefono_info: {
        numero,
        tipo,
        estado,
      },
    });

    // Save the phone record in the database
    await telefono.save();

    res.status(201).json({ msg: "Teléfono creado exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error al crear el teléfono" });
  }
};

export { crearTelefono };
