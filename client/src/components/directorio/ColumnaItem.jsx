import React from "react";

const ColumnaItem = ({ nombre = "columna" }) => {
  return (
    <th scope="col" className="px-6 py-3">
      {nombre}
    </th>
  );
};

export default ColumnaItem;
