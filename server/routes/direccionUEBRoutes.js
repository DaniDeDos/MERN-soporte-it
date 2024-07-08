import express from "express";
import { check } from "express-validator";
import {
  crearDireccionUEB,
  getAllDireccionUEB,
} from "../controllers/direccionUEBController.js";

const router = express.Router();

router.post(
  "/crear",
  [
    check("nombre", "El nombre de la dirección UEB es obligatorio").notEmpty(),
    check(
      "nombre",
      "La dirección UEB debe tener entre 3 y 30 caracteres"
    ).isLength({ min: 3, max: 30 }),
  ],
  crearDireccionUEB
);

router.get("/getAll", getAllDireccionUEB);

export default router;
