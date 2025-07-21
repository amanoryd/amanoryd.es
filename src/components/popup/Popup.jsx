import React, { useState, useEffect } from "react";
import "./Popup.css";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Temporizador con 3000ms de delay antes de montar el componente
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

		// Constante para guardar el ancho de la pantalla donde está cargando el componente Popup
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="popup-container">
          <div className="popup-content">
					{/* {windowWidth < 860 ? (
              <video
                src="./popup/video2024.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : ( */}
              <img
                src="./popup/horario-verano01.webp"
                alt="Horario de verano 2025"
              />
            <button onClick={handleClose}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
