import mongoose from "mongoose";

const TrabajadorSchema = new mongoose.Schema(
  {
    personal_info: {
      dni: {
        type: Number,
        required: true,
        unique: true,
      },
      nombre_completo: {
        type: String,
        lowercase: true,
        required: true,
      },
      edad: {
        type: Number,
      },
      fecha_nacimiento: {
        type: Date,
      },
    },
    emprequin_info: {
      cargo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cargo",
        default: null,
      },
      direccion_ueb: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DireccionUEB",
        default: null,
      },
      tipo_personal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Personal",
        default: null,
      },
      departamento_area: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DepartamentoArea",
        default: null,
      },
      telefono: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Telefono",
        default: null,
      },
      cuenta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cuenta",
        default: null,
      },
    },
  },
  {
    timestamps: {
      createdAt: "creado",
      updatedAt: "actualizado",
    },
    collection: "Trabajador",
  }
);

const Trabajador = mongoose.model("Trabajador", TrabajadorSchema);

export default Trabajador;
