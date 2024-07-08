import clienteAxios from "../../config/axios.js";

const getAll = async () => {
  try {
    const response = await clienteAxios.get("/departamento-area/crear");
    return response.data;
  } catch (error) {
    // Manejo de errores específicos
    if (error.response) {
      // El servidor respondió con un estado fuera del rango 2xx
      console.error("Error de respuesta:", error.response.data);
      console.error("Estado:", error.response.status);
      console.error("Headers:", error.response.headers);
      // Maneja el error según sea necesario
      throw error.response.data;
    } else if (error.request) {
      // La petición fue hecha pero no hubo respuesta
      console.error("Error de solicitud:", error.request);
      throw new Error("No se recibió ninguna respuesta del servidor.");
    } else {
      // Otros errores
      console.error("Error:", error.message);
      throw error;
    }
  }
};

export { getAll };
