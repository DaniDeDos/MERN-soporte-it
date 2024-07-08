import React, { useState, useEffect } from "react";
import ImputFieldItem from "../../components/directorio/ImputFieldItem.jsx";
import SelectInput from "../../components/formulario/SelectInput.jsx";
import { getAll } from "../../axios/get/axiosGet.js";
import clienteAxios from "../../config/axios.js";

const Trabajador = () => {
  const [tiposPersonal, setTiposPersonal] = useState([]);
  const [departamento_area, setDepartameto_Area] = useState([]);
  const [direccion_ueb, setDireccion_UEB] = useState([]);
  const [cargo_ocupa, setCargo_Ocupa] = useState([]);

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({});

  const cargarDireccion_UEB = async () => {
    const getDireccion_UEB = await getAll("/api/direccion-ueb/getAll");
    setDireccion_UEB(getDireccion_UEB);
  };

  const cargarDepartamento_Area = async () => {
    const getDepartameto_Area = await getAll("/api/departamento-area/getAll");
    setDepartameto_Area(getDepartameto_Area);
  };

  const cargarTipoPersonal = async () => {
    const getTipoPersonal = await getAll("/api/personal/getAll");
    setTiposPersonal(getTipoPersonal);
  };

  const cargarCargo_Ocupa = async () => {
    const getCargo = await getAll("/api/cargo/getAll");
    setCargo_Ocupa(getCargo);
  };

  useEffect(() => {
    cargarDireccion_UEB();
    cargarDepartamento_Area();
    cargarTipoPersonal();
    cargarCargo_Ocupa();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Extraer datos individuales
    const nombre = formData.primer_nombre;
    const dni = formData.di;
    const telefonoExtencion = formData.telefono_extencion;
    const segundoNombre = formData.segundo_nombre;
    const primerApellido = formData.primer_apellido;
    const segundoApellido = formData.segundo_apellido;
    const cargoOcupa = formData.ocupa_cargo;
    const direccionUeb = formData.direccion_ueb;
    const departamentoArea = formData.departamento_area;
    const tipoPersonal = formData.tipo_personal;
    console.log(formData)

    // Preparar el cuerpo de la solicitud
    const body = {
      dni,
      primer_nombre: nombre,
      segundo_nombre: segundoNombre,
      primer_apellido: primerApellido,
      segundo_apellido: segundoApellido,
      cargoId: cargoOcupa,
      direccion_ueb_id: direccionUeb,
      tipo_personal_id: tipoPersonal,
      departamento_area_id: departamentoArea,
      extencion_id: telefonoExtencion,
    };

    try {
      // Enviar los datos al backend
      const response = await clienteAxios.post("/api/trabajador/crear", body);
      console.log(response.data.msg);
    } catch (error) {
      console.error("Error al crear el trabajador:", error.response.data.msg);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className="md:pb-4 px-[5vw] py-5" onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-4">
        <ImputFieldItem
          id={"primer_nombre"}
          label={"Nombre"}
          placeholder={"ej: Ana"}
          onChange={handleInputChange}
        />
        <ImputFieldItem
          id={"segundo_nombre"}
          label={"Segundo Nombre"}
          placeholder={"ej: Maria"}
          onChange={handleInputChange}
        />
        <ImputFieldItem
          id={"primer_apellido"}
          label={"Apellido"}
          placeholder={"ej: Rodrigez"}
          onChange={handleInputChange}
        />
        <ImputFieldItem
          id={"segundo_apellido"}
          label={"Segundo Apellido"}
          placeholder={"ej: Perez"}
          onChange={handleInputChange}
        />

        <SelectInput
          id={"ocupa_cargo"}
          htmlFor={"ocupa_cargo"}
          label={"Cargo"}
          opt_label={"Seleccionar un Cargo"}
          options={cargo_ocupa}
          defaultValue={cargo_ocupa[0]?.id}
          onChange={handleInputChange}
        />
        <SelectInput
          id={"direccion_ueb"}
          htmlFor={"direccion_ueb"}
          label={"Dirección / UEB"}
          opt_label={"Seleccionar una Dirección"}
          options={direccion_ueb}
          defaultValue={direccion_ueb[0]?.id}
          onChange={handleInputChange}
        />
        <SelectInput
          id={"departamento_area"}
          htmlFor={"departamento_area"}
          label={"Departamento / Área"}
          opt_label={"Seleccionar un Área"}
          options={departamento_area}
          defaultValue={departamento_area[0]?.id}
          onChange={handleInputChange}
        />
        <SelectInput
          id={"tipo_personal"}
          htmlFor={"tipo_personal"}
          label={"Tipo de Personal"}
          opt_label={"Seleccionar Personal"}
          options={tiposPersonal}
          defaultValue={tiposPersonal[0]?.id}
          dataType="personal"
          onChange={handleInputChange}
        />
        <ImputFieldItem
          id={"di"}
          label={"DNI"}
          placeholder={"ej: 11234567890"}
          onChange={handleInputChange}
        />
        <ImputFieldItem
          id={"telefono_extencion"}
          label={"Telefono Extencion"}
          placeholder={"ej: 555-555-555"}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-900"
        >
          I agree with the{" "}
          <a href="#" className="text-blue-600 hover:underline">
            terms and conditions
          </a>
          .
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Crear Trabajador
      </button>
    </form>
  );
};

export default Trabajador;
{
  /*  
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex justify-end px-4 pt-4">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
          type="button"
        >
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        <!-- Dropdown menu --> 
        <div
          id="dropdown"
          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Export Data
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="img"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">Bonnie Green</h5>
        <span className="text-sm text-gray-500">Visual Designer</span>
        <div className="flex mt-4 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Add friend
          </a>
          <a
            href="#"
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Message
          </a>
        </div>
      </div>
     
    </div>*/
}
