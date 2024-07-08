import { validationResult } from "express-validator";
import CuentaSolicitada from "../Schema/CuentaSlicitada.js";
import Trabajador from "../Schema/Trbajador.js";
import Cuenta from "../Schema/Cuenta.js";

const crearCuentaSolicitada = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { trabajador_solicita, trabajador_recepta } = req.body;

  try {
    const cuentaSolicitada = new CuentaSolicitada({
      solicitud_info: {
        trabajador_solicita,
        trabajador_recepta,
      },
      cuenta,
    });

    await cuentaSolicitada.save();

    res.status(201).json({ msg: "Cuenta solicitada creada exitosamente" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Hubo un error al crear la cuenta solicitada" });
  }
};

export { crearCuentaSolicitada };
