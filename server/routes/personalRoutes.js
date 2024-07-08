import express from "express";
import { check } from "express-validator";
import {
  crearPersonal,
  getAllPersonal,
} from "../controllers/personalController.js";

const router = express.Router();

router.post(
  "/crear",
  [
    check("tipo_personal", "El tipo de personal es obligatorio").notEmpty(),
    check(
      "tipo_personal",
      "El tipo de personal debe tener entre 3 y 30 caracteres"
    ).isLength({ min: 3, max: 30 }),
  ],
  crearPersonal
);

router.get("/getAll", getAllPersonal);

export default router;
