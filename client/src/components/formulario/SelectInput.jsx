import React from "react";

const SelectInput = ({
  id,
  htmlFor,
  label = "",
  opt_label = "Seleccionar",
  options,
  dataType = "default",
  defaultValue,
  onChange,
}) => {
  // Función para determinar cómo mostrar las opciones basado en dataType
  const renderOptions = () => {
    if (dataType === "default") {
      return options.map((opcion) => (
        <option key={opcion._id} value={opcion._id}>
          {opcion.nombre}
        </option>
      ));
    } else if (dataType === "personal") {
      return options.map((opcion) => (
        <option key={opcion._id} value={opcion._id}>
          {opcion.tipo_personal}
        </option>
      ));
    }
    // Casos donde dataType no es reconocido
    return null;
  };

  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <select
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        defaultValue={defaultValue}
        onChange={(e) => onChange(id, e.target.value)}
      >
        <option value="" disabled>
          {opt_label}
        </option>
        {renderOptions()}
      </select>
    </div>
    
  );
};

export default SelectInput;
