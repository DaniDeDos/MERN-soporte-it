import { validationResult } from "express-validator";
import Cuenta from "../Schema/Cuenta.js";
import Trabajador from "../Schema/Trbajador.js";
import Nombre from "../Schema/Nombre.js";

import {
  obtenerPrimeraPalabra,
  acortarNombres,
} from "../utils/MetodoString.js";

const crearCuenta = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { solicitador_id, propietario_id } = req.body;

  let solicitada_por = null;
  if (solicitador_id) {
    try {
      solicitada_por = await Trabajador.findById(solicitador_id);
    } catch (error) {
      console.error("Error al cargar trabajador:", error);
      return res.status(500).json({ msg: "Error al cargar trabajador" });
    }
  }

  let nuevo_usuario = null;
  if (propietario_id) {
    try {
      nuevo_usuario = await Trabajador.findById(propietario_id);
    } catch (error) {
      console.error("Error al cargar Nombre:", error);
      return res.status(500).json({ msg: "Error al cargar Nombre" });
    }
  }

  let [nuevo_usuario_nombre, nuevo_usuario_resto] = obtenerPrimeraPalabra(
    nuevo_usuario.personal_info.nombre_completo
  );

  nuevo_usuario_nombre += acortarNombres(nuevo_usuario_resto);

  try {
    const cuenta = new Cuenta({
      cuenta_info: {
        usuario: nuevo_usuario_nombre,
        propietario_id,
        solicitador_id,
      },
    });

    await cuenta.save();

    res.status(201).json({ msg: "Cuenta solicitada creada exitosamente" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Hubo un error al crear la cuenta solicitada" });
  }
};

export { crearCuenta };
