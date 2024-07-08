import mongoose, { Schema } from "mongoose";

const CargoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      minlength: [3, "El cargo debe tener al menos 3 caracteres."],
      maxlength: [30, "El cargo no puede tener más de 30 caracteres."],
    },
  },
  // Nombre de la colección
  {
    timestamps: {
      createdAt: "creado",
      updatedAt: "actualizado",
    },
    collection: "Cargo",
  }
);

const Cargo = mongoose.model("Cargo", CargoSchema);

export default Cargo;
