import React, { useState } from "react";
import Paginador from "./paginador.component";
import CuentaForm from "./cuenta-form.component";

const LinearStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps] = useState(3);

  const handleNext = (step) => {
    setCurrentStep(step);
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return <div>Personal Info</div>;
      case 2:
        return <CuentaForm/>;
      case 3:
        return <div>Review</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mx-auto max-w-4xl px-4">
        <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
          <li
            className={`flex items-center ${
              currentStep === 1 ? "text-blue-600 dark:text-blue-500" : ""
            }`}
          >
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
              1
            </span>
            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li
            className={`flex items-center ${
              currentStep === 2 ? "text-blue-600 dark:text-blue-500" : ""
            }`}
          >
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              2
            </span>
            Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="rtl:rotate-180"
                strokeWidth="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li
            className={`flex items-center ${
              currentStep === 3 ? "text-blue-600 dark:text-blue-500" : ""
            }`}
          >
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              3
            </span>
            Review
          </li>
        </ol>
      </div>

      {/* Step content */}
      {renderStepContent(currentStep)}

      {/* Paginador */}
      <Paginador
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </>
  );
};

export default LinearStepper;