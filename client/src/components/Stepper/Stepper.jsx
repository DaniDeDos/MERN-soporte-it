import React from "react";

const Stepper = () => {
  return (
    <ol className="w-full flex items-center text-sm font-medium text-center text-gray-500 sm:text-base">
      <li className="flex md:w-full items-center text-blue-600 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          Correo
        </span>
      </li>
      <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
          <span className="me-2">2</span>
          Navegacion
        </span>
      </li>
      <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
          <span className="me-2">3</span>
          Privilegios
        </span>
      </li>
      <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
          <span className="me-2">4</span>
          Aplicaciones
        </span>
      </li>
      <li className="flex items-center">
        <span className="me-2">5</span>
        Horario
      </li>
    </ol>
  );
};

export default Stepper;
