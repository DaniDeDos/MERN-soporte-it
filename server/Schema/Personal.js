import mongoose from "mongoose";

const PersonalSchema = new mongoose.Schema(
  {
    tipo_personal: {
      type: String,
      lowercase: true,
      required: true,
      minlength: [3, "El cargo debe tener al menos 3 caracteres."],
      maxlength: [30, "El cargo no puede tener más de 30 caracteres."],
    },
  },
  {
    timestamps: {
      createdAt: "creado_fecha",
      updatedAt: "actualizado_fecha",
    },
    collection: "Personal",
  }
);

const Personal = mongoose.model("Personal", PersonalSchema);

export default Personal;
