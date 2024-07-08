import mongoose, { Schema } from "mongoose";

const DireccionUEBSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      lowercase: true,
      required: true,
      minlength: [3, "El cargo debe tener al menos 3 caracteres."],
      maxlength: [30, "El cargo no puede tener más de 30 caracteres."],
    },
  },
  // Nombre de la colección
  {
    collection: "Direccion_UEB",
  }
);

const DireccionUEB = mongoose.model("Direccion_UEB", DireccionUEBSchema);

export default DireccionUEB;
