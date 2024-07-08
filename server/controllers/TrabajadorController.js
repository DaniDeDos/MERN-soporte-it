import { validationResult } from "express-validator";
import Trabajador from "../Schema/Trbajador.js";
import Cargo from "../Schema/Cargo.js";
import DireccionUEB from "../Schema/DireccionUEB.js";
import Departamento_Area from "../Schema/DepartamentoArea.js";
import Personal from "../Schema/Personal.js";
import Nombre from "../Schema/Nombre.js";
import Telefono from "../Schema/Telefono.js";

const crearTrabajador = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const {
    dni,
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    cargoId,
    direccion_ueb_id,
    tipo_personal_id,
    departamento_area_id,
    extencion_id,
  } = req.body;

  try {
    const nombreExistente = await Nombre.findOne({ _id: dni });
    if (nombreExistente) {
      return res.status(400).json({ msg: "El nombre ya existe" });
    }
    // Crear el nombre
    const nuevoNombre = new Nombre({
      _id: dni,
      primer_nombre,
      segundo_nombre,
      primer_apellido,
      segundo_apellido,
    });

    // Guardar el nombre en la base de datos
    await nuevoNombre.save();

    // El guardado del nombre fue exitoso
    console.log("Nombre guardado exitosamente");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error al crear el nombre" });
  }

  try {
    const dniNumber = parseInt(dni, 10);
    console.log(dniNumber);
    // Verificar si el trabajador ya existe

    let trabajadorExistente = await Trabajador.findOne({
      "personal_info.dni": dniNumber,
    });

    if (trabajadorExistente) {
      try {
        console.log(trabajadorExistente.personal_info.dni);
        return res.status(400).json({ msg: "El trabajador ya existe" });
      } catch (error) {
        console.error("Error al cargar Trabajador:", error);
        return res.status(500).json({ msg: "Error al cargar Trabajador" });
      }
    }

    let cargo = null;
    if (cargoId) {
      try {
        cargo = await Cargo.findById(cargoId);
        console.log(cargoId);
      } catch (error) {
        console.error("Error al cargar cargo:", error);
        return res.status(500).json({ msg: "Error al cargar cargo" });
      }
    }

    let direccion_ueb = null;
    if (direccion_ueb_id) {
      try {
        direccion_ueb = await DireccionUEB.findById(direccion_ueb_id);
      } catch (error) {
        console.error("Error al cargar DireccionUEB:", error);
        return res.status(500).json({ msg: "Error al cargar DireccionUEB" });
      }
    }

    let departamento_area = null;
    if (departamento_area_id) {
      try {
        departamento_area = await Departamento_Area.findById(
          departamento_area_id
        );
      } catch (error) {
        console.error("Error al cargar Departamento_Area:", error);
        return res
          .status(500)
          .json({ msg: "Error al cargar Departamento_Area" });
      }
    }

    let tipo_personal = null;
    if (tipo_personal_id) {
      try {
        tipo_personal = await Personal.findById(tipo_personal_id);
      } catch (error) {
        console.error("Error al cargar Personal:", error);
        return res.status(500).json({ msg: "Error al cargar Personal" });
      }
    }

    let telefono_ext_id = null;
    let telefonoExiste = await Telefono.findOne({
      "telefono_info.numero": extencion_id,
    });

    if (telefonoExiste) {
      try {
        telefono_ext_id = telefonoExiste._id;
      } catch (error) {
        console.error("Error al cargar Telefono:", error);
        return res.status(500).json({ msg: "Error al cargar Telefono" });
      }
    }

    if (!telefonoExiste) {
      // Create the phone record
      const telefono = new Telefono({
        telefono_info: {
          numero: extencion_id,
          tipo: "extencion",
          estado: "activo",
        },
      });

      // Save the phone record in the database
      await telefono.save();

      // Correctly assign the ID of the newly created phone record
      telefono_ext_id = telefono._id;
    }

    // Extraer fecha de nacimiento
    const annio = dni.toString().slice(0, 2);
    const mes = dni.toString().slice(2, 4);
    const dia = dni.toString().slice(4, 6);

    let fecha_nacimiento;
    let edad;

    if (annio >= 0 && annio <= 40) {
      // DNI pertenece a los años 2000-2040
      fecha_nacimiento = `20${annio}-${mes}-${dia}`;
    } else {
      // DNI pertenece a los años 1900-1999
      fecha_nacimiento = `19${annio}-${mes}-${dia}`;
    }

    // Obtener la edad
    // Crear la fecha de nacimiento a partir de los valores extraídos
    const fechaNacimiento = new Date(`${fecha_nacimiento}T00:00:00`);

    // Calcular la edad
    const fechaActual = new Date();
    edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    // Verificar si todavía no ha cumplido años en el año actual
    if (
      fechaActual.getMonth() < fechaNacimiento.getMonth() ||
      (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
        fechaActual.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }

    // Crear el trabajador
    const trabajador = new Trabajador({
      personal_info: {
        _id: dni,
        dni: dni,
        nombre_completo: `${primer_nombre} ${segundo_nombre} ${primer_apellido} ${segundo_apellido}`,
        edad,
        fecha_nacimiento,
      },
      emprequin_info: {
        cargo,
        direccion_ueb,
        tipo_personal,
        departamento_area,
        telefono: telefono_ext_id,
      },
    });

    // Guardar el trabajador en la base de datos
    await trabajador.save();

    res.status(201).json({ msg: "Trabajador creado exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error al crear el trabajador" });
  }
};

const getTrabajador = async (req, res) => {
  const { dni } = req.body;

  try {
    // Buscar trabajador por DNI
    const trabajador = await Trabajador.findOne({
      "personal_info.dni": dni,
    });
    if (!trabajador) {
      return res.status(404).json({ msg: "Trabajador no encontrado" });
    }
    // Devuelve el trabajador encontrado
    res.status(200).json(trabajador);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

const getTrabajadores = async (req, res) => {
  try {
    // Buscar todos los trabajadores
    const trabajadores = await Trabajador.find().populate(
      "emprequin_info.cargo"
    );

    if (trabajadores.length === 0) {
      return res.status(404).json({ msg: "No hay trabajadores disponibles" });
    }

    // Devuelve todos los trabajadores encontrados
    res.status(200).json(trabajadores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export { crearTrabajador, getTrabajador, getTrabajadores };
