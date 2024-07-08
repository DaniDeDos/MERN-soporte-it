import mongoose, { Schema } from "mongoose";

const Departamento_Area_Schema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      lowercase: true,
      required: true,
      minlength: [3, "El departamento debe tener al menos 3 caracteres."],
      maxlength: [30, "El departamento no puede tener más de 30 caracteres."],
    },
  },
  // Nombre de la colección
  {
    timestamps: {
      createdAt: "creado_fecha",
      updatedAt: "actualizado_fecha",
    },
    collection: "Departamento_Area",
  }
);

const Departamento_Area = mongoose.model(
  "Departamento_Area",
  Departamento_Area_Schema
);

export default Departamento_Area;
