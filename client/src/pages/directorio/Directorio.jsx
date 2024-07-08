import React, { useState, useEffect } from "react";
import TablaItem from "../../components/directorio/TablaItem.jsx";
import ColumnaItem from "../../components/directorio/ColumnaItem.jsx";
import DropdownMenu from "../../components/directorio/DropdownMenu.jsx";
import Buscar from "../../components/directorio/Buscar.jsx";
import axios from "axios";
import { getCapitalize } from "../../utils/MetodoString.js";
import Paginador from "../../components/directorio/Paginador.jsx";

const Directorio = () => {
  // Estado para controlar la visibilidad del menú desplegable
  const [isOpen, setIsOpen] = useState(false);
  const [trabajadores, setTrabajadores] = useState([]);

  // Función para manejar el clic en el botón y cambiar la visibilidad del menú
  const toggleDropdown = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  const getTrabajadores = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/trabajador/getTrabajadores"
      );
      setTrabajadores(response.data);
    } catch (error) {
      console.error("Error al cargar los trabajadores:", error);
    }
  };
  useEffect(() => {
    getTrabajadores();
  }, []);

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <>
      <div className="relative shadow-md sm:rounded-lg px-[5vw] py-5">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
          <div className="relative mr-auto">
            <button
              id="dropdownActionButton"
              type="button"
              data-dropdown-toggle="dropdownAction"
              className={`inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-3 py-1.5`}
              onClick={toggleDropdown}
              onBlur={handleBlur}
            >
              <span className="sr-only">Action button</span>
              Accion
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* -- Dropdown menu -- */}
            <DropdownMenu isOpen={isOpen} toggleDropdown={toggleDropdown} />
          </div>
          <label htmlFor="table-search" className="sr-only">
            Buscar
          </label>
          <Buscar placeholder="Buscar.." />
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 w-full border border-grey">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <ColumnaItem nombre={"Nombre"} />
              <ColumnaItem nombre={"Cargo"} />
              <ColumnaItem nombre={"Departamento/Área"} />
              <ColumnaItem nombre={"Dirección/UEB"} />
              <ColumnaItem nombre={"Telefono"} />
            </tr>
          </thead>
          <tbody>
            {trabajadores.map((trabajador) => (
              <TablaItem
                key={trabajador._id}
                nombre={getCapitalize(trabajador.personal_info.nombre_completo)}
                cargo={getCapitalize(trabajador.emprequin_info.cargo.nombre)}
                correo={trabajador.email || ""}
                depa_area={getCapitalize(
                  trabajador.emprequin_info.departamento_area
                    ? trabajador.emprequin_info.departamento_area.nombre
                    : ""
                )}
                telefono_ext={
                  trabajador.emprequin_info.telefono.extencion
                    ? trabajador.emprequin_info.telefono.extencion.numero
                    : ""
                }
              />
            ))}
          </tbody>
        </table>
      </div>

      <Paginador />
    </>
  );
};

export default Directorio;
