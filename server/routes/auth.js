// auth.js
import express from "express";
import { check } from "express-validator";
import { signup, signin } from "../controllers/authController.js";

const router = express.Router();

router.post(
  "/signup",
  [
    check("name", "El nombre requiere minimo 4 caracteres").isLength({
      min: 4,
    }),
    check("email", "El email es obligatorio").notEmpty(),
    check("email", "Escribe un email valido").isEmail(),
    check("password", "El password requiere minimo 8 caracteres").isLength({
      min: 8,
    }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "El email es obligatorio").notEmpty(),
    check("email", "Escribe un email valido").isEmail(),
    check("password", "El password requiere minimo 8 caracteres").isLength({
      min: 8,
    }),
    check(
      "password",
      "El password requiere al menos una letra minuscula"
    ).matches(/[a-z]/),
    check(
      "password",
      "El password requiere al menos una letra mayuscula"
    ).matches(/[A-Z]/),
    check("password", "El password requiere al menos un numero").matches(/\d/),
    check(
      "password",
      "El password requiere al menos un caracter especial"
    ).matches(/[^a-zA-Z0-9]/),
  ],
  signin
);

export default router;
