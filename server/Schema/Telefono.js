import mongoose from "mongoose";

const TelefonoSchema = new mongoose.Schema(
  {
    telefono_info: {
      numero: {
        type: Number,
        required: true,
      },
      tipo: {
        type: String,
        enum: ["extencion", "corporativo", "personal"],
        required: true,
      },
      estado: {
        type: String,
        enum: ["activo", "mantenimiento", "fuera de servicio", "baja"],
        required: true,
      },
    },
  },
  {
    timestamps: {
      createdAt: "creado",
      updatedAt: "actualizado",
    },
    collection: "Telefono",
  }
);

const Telefono = mongoose.model("Telefono", TelefonoSchema);

export default Telefono;
