import mongoose, { Schema } from "mongoose";

const CuentaSchema = new mongoose.Schema(
  {
    cuenta_info: {
      usuario: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        default: null,
      },
      propietario_id: String,
      tipo_cuenta: {
        type: String,
        enum: ["temporal", "permanente"],
        default: "temporal",
      },
      estado: {
        type: String,
        enum: ["activa", "pendiente", "desactivada", "baja"],
        default: "pendiente",
      },
      solicitador_id: String,
      activada_por: String,
      desactivada_por: String,
      horario: String,
      vence: String,
    },
    servicio_info: {
      correo_electronico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Correo_Electronico",
        default: null,
      },
      navegacion_web: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Navegacion_Web",
        default: null,
      },
      aplicacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Navegacion_Web",
        default: null,
      },
      privilegio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Navegacion_Web",
        default: null,
      },
      rol: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: {
      createdAt: "creado",
      updatedAt: "actualizado",
    },
    // Nombre de la colección
    collection: "Cuenta",
  }
);

const Cuenta = mongoose.model("Cuenta", CuentaSchema);

export default Cuenta;
