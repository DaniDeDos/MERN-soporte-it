import express from "express";
import { check } from "express-validator";
import {
  crearDepartamentoArea,
  getAll_Departamento_Area,
} from "../controllers/DepartamentoAreaController.js";

const router = express.Router();

router.post(
  "/crear",
  [
    check("nombre", "El nombre del departamento es obligatorio").notEmpty(),
    check(
      "nombre",
      "El departamento debe tener entre 3 y 30 caracteres"
    ).isLength({ min: 3, max: 30 }),
  ],
  crearDepartamentoArea
);

router.get("/getAll", getAll_Departamento_Area);

export default router;
