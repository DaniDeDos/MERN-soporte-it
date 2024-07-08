import React from "react";

const Paginador = ({ currentStep, totalSteps, onPrevious, onNext }) => {
  return (
    <div
      aria-label="Custom Button Navigation"
      className="flex items-center justify-between mx-auto max-w-4xl px-4"
    >
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <button
            onClick={onPrevious}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Anterior
          </button>
        </li>
        {Array.from(Array(totalSteps)).map((_, index) => (
          <li key={index}>
            <button
              onClick={() => onNext(index + 1)}
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentStep === index + 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onNext(currentStep + 1)}
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              currentStep === totalSteps ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginador;
