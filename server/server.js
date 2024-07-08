// server.js

// importacion de terceros
import express from "express";
import cors from "cors";

// importacion del conector a la bd
import conectarBD from "./config/conn.js";

// importacion de Routes
import authRoutes from "./routes/auth.js";
import trabajadorRoutes from "./routes/TrabajadorRoutes.js";
import cargoRoutes from "./routes/cargoRoutes.js";
import direccionUEBRoutes from "./routes/direccionUEBRoutes.js";
import personalRoutes from "./routes/personalRoutes.js";
import TelefonoRoutes from "./routes/TelefonoRoutes.js";
import cuentaSolicitadaRoutes from "./routes/CuentaSolicitadaRoutes.js";
import DepartamentoAreaRoutes from "./routes/DepartamentoAreaRoutes.js";
import CuentaRoutes from "./routes/CuentaRoutes.js";

const server = express();

conectarBD();

const PORT = process.env.PORT || 4000;

server.use(cors({ origin: "http://localhost:5173", credentials: true }));
server.use(express.json({ extended: true }));

// Habilitando las Apis en el server
server.use("/api/auth", authRoutes);
server.use("/api/trabajador", trabajadorRoutes);
server.use("/api/cargo", cargoRoutes);
server.use("/api/direccion-ueb", direccionUEBRoutes);
server.use("/api/personal", personalRoutes);
server.use("/api/telefono", TelefonoRoutes);
server.use("/api/cuenta", cuentaSolicitadaRoutes);
server.use("/api/departamento-area", DepartamentoAreaRoutes);
server.use("/api/cuenta", CuentaRoutes);

server.listen(PORT, () => {
  console.log(`Servidor funcionando en: http://localhost:${PORT}`);
});
