import axios from "axios";

const getAllPersonal = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/personal/getAll"
    );
    return response.data;
  } catch (error) {
    console.error("Error al cargar los tipos de personal:", error);
    throw error;
  }
};

export { getAllPersonal };
