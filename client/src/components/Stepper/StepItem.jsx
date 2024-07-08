// StepItem.js
import React from "react";

const StepItem = ({ number, title }) => {
  return (
    <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
      <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
        <span className="me-2">{number}</span>
        {title}
      </span>
    </li>
  );
};

export default StepItem;
