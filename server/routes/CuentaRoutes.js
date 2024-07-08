import express from "express";
import { crearCuenta } from "../controllers/CuentaController.js";

const router = express.Router();

router.post("/nueva", crearCuenta);

export default router;
