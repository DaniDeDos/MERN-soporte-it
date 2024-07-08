import React, { useState } from "react";

const FlexShrink = ({ span = "texto", className = "" }) => {
  // Estado para rastrear si el ícono está activo
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li className={`flex ${className}`}>
      <>
        <svg
          onClick={handleClick}
          className={`flex-shrink-0 w-4 h-4 text-gray-400 cursor-pointer ${
            isActive ? "text-blue-700" : "text-gray-400"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
      </>
      <span className="text-base font-normal leading-tight text-gray-500 ms-3">
        {span}
      </span>
    </li>
  );
};

export default FlexShrink;
