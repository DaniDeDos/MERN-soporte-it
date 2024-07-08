import axios from "axios";

const getAllDireccionUEB = async ({ api }) => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/direccion-ueb/getAll"
    );
    return response.data;
  } catch (error) {
    console.error("Error al cargar Direccion / UEB.:", error);
    throw error;
  }
};

export { getAllDireccionUEB };
