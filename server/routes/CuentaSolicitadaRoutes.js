import express from "express";
import { check } from "express-validator";
import { crearCuentaSolicitada } from "../controllers/CuentaSolicitadaController.js";

const router = express.Router();

router.post(
  "/solicitar",
  [
    check(
      "trabajador_solicita",
      "El ID del trabajador que solicita es requerido."
    ).notEmpty(),
  ],
  [
    check(
      "trabajador_recepta",
      "El ID del trabajador que recepta es requerido."
    ).notEmpty(),
  ],
  crearCuentaSolicitada
);

export default router;
