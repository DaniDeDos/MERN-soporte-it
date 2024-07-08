import React, { useState, useEffect } from "react";
import SolicitudTarjeta from "../components/SolicitudTarjeta";
import "animate.css";

const CuentaSolicitud = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentCardName, setCurrentCardName] = useState("");
  // Inicializa nextCardIndex en 1 para comenzar con la segunda tarjeta
  const [nextCardIndex, setNextCardIndex] = useState(1);
  const cards = [
    { nombre: "Correo Electronico" },
    { nombre: "Navegacion Web" },
    { nombre: "Privilegios del usuario" },
    { nombre: "Aplicaciones" },
  ];

  const handleContinueClick = () => {
    if (nextCardIndex < cards.length) {
      setCurrentCardName(cards[nextCardIndex].nombre);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setNextCardIndex(nextCardIndex + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    setCurrentCardName(cards[0].nombre); // Muestra la primera tarjeta al cargar
    setNextCardIndex(1); // Actualiza nextCardIndex para reflejar que se muestra la primera tarjeta
  }, []);

  return (
    <div className="px-[5vw] py-5">
      <div className="h-cover flex justify-center items-center">
        <div className="flex flex-col">
          {currentCardName && (
            <SolicitudTarjeta
              nombre={currentCardName}
              className={`${
                isAnimating ? "animate__animated animate__flipInY" : ""
              }`}
            />
          )}

          {/* Renderiza el botón "Anterior" solo si nextCardIndex > 1 */}
          <div className="flex justify-between">
            {currentCardName && (
              <div>
                <div className="grid grid-cols-4 py-5 text-sm text-gray-700 gap-x-16">
                  <div>
                    {nextCardIndex > 1 && (
                      <div className="flex justify-start">
                        <button
                          type="button"
                          className="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                          onClick={() => setNextCardIndex(nextCardIndex - 1)}
                        >
                          Anterior
                        </button>
                      </div>
                    )}
                  </div>
                  <div></div>
                  <div></div>
                  <div className="flex justify-end justify-self-end">
                    <button
                      type="button"
                      className="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      onClick={handleContinueClick}
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuentaSolicitud;
