import React from "react";
import DropDownLItem from "./DropDownLItem";

const DropdownMenu = ({ isOpen }) => {
  return (
    <div
      id="dropdownAction"
      className={`z-10 ${
        isOpen ? "absolute" : "hidden"
      } bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
    >
      <ul
        className="py-1 text-sm text-gray-700"
        aria-labelledby="dropdownActionButton"
      >
        <DropDownLItem nombre={"Nuevo Trabajador"} link={"/directorio/trabajador/nuevo"} />
        <DropDownLItem nombre={"Solicitar Cuenta"} link={"/directorio/trabajador/nuevo/cuenta"}/>
        <hr className="w-full border-b border-grey" />
        <DropDownLItem nombre={"Eliminar trabajador"} />
      </ul>
      <div className="py-1">
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Delete User
        </a>
      </div>
    </div>
  );
};

export default DropdownMenu;
