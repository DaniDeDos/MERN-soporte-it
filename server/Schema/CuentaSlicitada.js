import mongoose from "mongoose";

const CuentaSolicitadaSchema = new mongoose.Schema(
  {
    solicitud_info: {
      trabajador_solicita: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trabajador",
        required: true,
      },
      trabajador_recepta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trabajador",
        required: true,
      },
      estado: {
        type: String,
        lowercase: true,
        default: "pendiente",
        enum: ["pendiente", "aprobado", "denegado"],
      },
    },
    cuenta: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cuenta",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "creada",
      updatedAt: "actualizada",
    },
    collection: "Cueta_Solicitada",
  }
);

const CuentaSolicitada = mongoose.model(
  "CuentaSolicitada",
  CuentaSolicitadaSchema
);

export default CuentaSolicitada;
