import React from "react";
import CustomCheckInput from "./CustomCheckInput";

const SolicitudTarjeta = ({ nombre = "titulo", className = "" }) => {
  return (
    <div
      className={`w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ${className}`}
    >
      <h5 className="mb-4 text-xl font-medium text-gray-500">{nombre}</h5>
      <div className="flex justify-between">
        <ul role="list" className="space-y-5 my-7">
          <CustomCheckInput span={"Local"} className="items-center" />
          <CustomCheckInput span={"Nacional"} />
          <CustomCheckInput span={"Internacional"} />
        </ul>
        <div className="flex">
          <form className="max-w-sm">
            <label
              htmlFor="message"
              clasname="block mb-2 text-sm font-medium text-gray-900"
            >
              Motivo
            </label>
            <textarea
              id="message"
              rows="4"
              className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="texto del motivo de la solicitud aqui"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SolicitudTarjeta;
