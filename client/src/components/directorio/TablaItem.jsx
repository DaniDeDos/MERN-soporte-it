import React from "react";
import img from "../../imgs/default.svg.png"

const TablaItem = ({
  nombre = "desconocido",
  cargo = "desconocido",
  correo = "@desconocido",
  depa_area = "desconocido",
  dir_ueb = "desconocido",
  telefono_ext = "desconocido",
}) => {
  return (
    <tr className="bg-white border-b border-grey hover:bg-gray-50">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={img}
          alt="img"
        />
        <div className="ps-3">
          <div className="text-base font-semibold">{nombre}</div>
          <div className="font-normal text-gray-500">{correo}</div>
        </div>
      </th>
      <td className="px-6 py-4">{cargo}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
          {depa_area}
        </div>
      </td>
      <td className="px-6 py-4">{dir_ueb}</td>
      <td className="px-6 py-4">{"ext: " + telefono_ext}</td>
    </tr>
  );
};

export default TablaItem;
