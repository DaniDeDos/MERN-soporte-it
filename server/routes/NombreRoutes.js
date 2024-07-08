import express from "express";
import { check } from "express-validator";
import { crearNombre } from "../controllers/NombreController.js";

const router = express.Router();

router.post(
  "/crear",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("apellido", "El apellido es obligatorio").not().isEmpty(),
    check("nombre", "El nombre debe tener entre 3 y 30 caracteres").isLength({
      min: 3,
      max: 30,
    }),
    check(
      "segundo_nombre",
      "El segundo nombre debe tener entre 3 y 30 caracteres"
    )
      .optional({ nullable: true })
      .isLength({ min: 3, max: 30 }),
    check(
      "apellido",
      "El apellido debe tener entre 3 y 30 caracteres"
    ).isLength({
      min: 3,
      max: 30,
    }),
    check(
      "segundo_apellido",
      "El segundo apellido debe tener entre 3 y 30 caracteres"
    ).isLength({ min: 3, max: 30 }),
  ],
  crearNombre
);

export default router;
