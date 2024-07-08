import express from "express";
import { check } from "express-validator";
import {
  crearTrabajador,
  getTrabajador,
  getTrabajadores,
} from "../controllers/TrabajadorController.js";

const router = express.Router();

router.post(
  "/crear",
  [
    check("dni", "El DNI es obligatorio").notEmpty(),
    check("primer_nombre", "El nombre es obligatorio").notEmpty(),
    check("primer_apellido", "El apellido es obligatorio").notEmpty(),
    check("segundo_apellido", "El segundo apellido es obligatorio").notEmpty(),
  ],
  crearTrabajador
);

router.get(
  "/getTrabajador",
  [
    check("dni", "El DNI es obligatorio").notEmpty(),
    check("dni", "El DNI debe tener 11 caracteres").isLength({
      min: 11,
      max: 11,
    }),
  ],
  getTrabajador
);

router.get("/getTrabajadores", getTrabajadores);

export default router;
