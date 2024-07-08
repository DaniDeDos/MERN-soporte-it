import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

mongoose.Promise = global.Promise;

const conectarBD = async () => {
  try {
    await mongoose.connect(process.env.DB_LOCATION, {
      autoIndex: true,
    });
    console.log("conectado a bd");
  } catch (error) {
    console.log("error al conectarce a la bd: ");
    console.log(error);
    process.exit(1);
  }
};

export default conectarBD;
