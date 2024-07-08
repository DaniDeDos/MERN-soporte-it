import express from "express";
import { check } from "express-validator";
import { crearTelefono } from "../controllers/TelefonoController.js";

const router = express.Router();

router.post(
  "/crear",
  [
    check("numero", "El número de teléfono es obligatorio").notEmpty(),
    check("tipo", "El tipo de teléfono es obligatorio").notEmpty(),
    check("estado", "El estado del teléfono es obligatorio").notEmpty(),
  ],
  crearTelefono
);

export default router;
