import express from "express";
import { check } from "express-validator";
import { crearCargo, getAll_Cargo } from "../controllers/cargoController.js";
import Cargo from "../Schema/Cargo.js";

const router = express.Router();

// Middleware para validar que el nombre del cargo sea único
const validarNombreUnico = async (value) => {
  const cargo = await Cargo.findOne({ nombre: value });
  if (cargo) {
    throw new Error("El nombre del cargo ya está en uso");
  }
};

router.post(
  "/crear",
  [
    check("nombre", "El nombre del cargo es obligatorio").notEmpty(),
    check("nombre", "El cargo debe tener entre 3 y 30 caracteres").isLength({
      min: 3,
      max: 30,
    }),
    check("nombre").custom(validarNombreUnico),
  ],
  crearCargo
);

router.get("/getAll", getAll_Cargo);

export default router;
