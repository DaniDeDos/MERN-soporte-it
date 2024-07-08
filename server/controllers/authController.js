import { validationResult } from "express-validator";
import bcryptjs from "bcryptjs";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import User from "../Schema/User.js";

// formatear
const formatearDataSend = (user) => {
  const access_token = jwt.sign(
    { id: user._id },
    process.env.SECRET_ACCESS_KEY,
    {
      expiresIn: 3600, //1h
    }
  );

  return {
    username: user.personal_info.name,
    profile_img: user.personal_info.profile_img,
    username: user.personal_info.username,
    access_token,
  };
};

const signup = async (req, res) => {
  // Presisar errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(403).json({ errores: errores.array() });
  }

  // Extraer los datos
  let { name, email, password } = req.body;
  let username = email.split("@")[0];

  try {
    // Presisar que el usuario no existe via email
    let usuario = await User.findOne({ "personal_info.email": email });

    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    // Crear un el username
    let esUnicoUserName = await User.exists({
      "personal_info.username": username,
    }).then((result) => result);

    esUnicoUserName ? (username += nanoid().substring(0, 4)) : "";

    // Hashear el password
    const salt = await bcryptjs.genSalt(10);
    password = await bcryptjs.hash(password, salt);

    // Crear un nuevo usuario
    usuario = new User({
      personal_info: { name, email, password, username },
    });

    await usuario.save().then((u) => {
      return res.status(200).json(formatearDataSend(u));
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "hubo un error" });
  }
};

const signin = async (req, res) => {
  // Validate errors
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(403).json({ errores: errores.array() });
  }

  // Extract data
  let { email, password } = req.body;

  try {
    // Fetch the user based on email
    let usuario = await User.findOne({ "personal_info.email": email });

    if (!usuario) {
      return res.status(200).json({ msg: "El email es incorrecto" });
    }

    // Compare password
    bcryptjs.compare(
      password,
      usuario.personal_info.password,
      (error, result) => {
        if (error)
          res.status(403).json({ msg: "hubo un error durante el login" });
        if (!result) {
          res.status(400).json({ msg: "El password es incorrecto" });
        } else {
          return res.status(200).json(formatearDataSend(usuario));
        }
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "hubo un error" });
  }
};

export { signup, signin };
