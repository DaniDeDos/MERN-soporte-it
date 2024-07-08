import mongoose from "mongoose";

const NombreSchema = new mongoose.Schema(
  {
    _id: Number,
    primer_nombre: {
      type: String,
      lowercase: true,
      required: true,
      minlength: [3, "El nombre debe tener al menos 3 caracteres."],
      maxlength: [30, "El nombre no puede tener más de 30 caracteres."],
    },
    segundo_nombre: {
      type: String,
      default: "",
      lowercase: true,
    },
    primer_apellido: {
      type: String,
      required: true,
      lowercase: true,
      minlength: [3, "El apellido debe tener al menos 3 caracteres."],
      maxlength: [30, "El apellido no puede tener más de 30 caracteres."],
    },
    segundo_apellido: {
      type: String,
      required: true,
      lowercase: true,
      minlength: [3, "El segundo apellido debe tener al menos 3 caracteres."],
      maxlength: [
        30,
        "El segundo apellido no puede tener más de 30 caracteres.",
      ],
    },
  },
  {
    timestamps: {
      createdAt: "creado",
      updatedAt: "actualizado",
    },
    collection: "Nombre",
  }
);

const Nombre = mongoose.model("Nombre", NombreSchema);

export default Nombre;
