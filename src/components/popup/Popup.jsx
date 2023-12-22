import React, { useState, useEffect } from 'react'
import './Popup.css'

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Temporizador con 3000ms de delay antes de montar el componente
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
  
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
              <img src="./popup/felicitacion-navidad-2023.webp" alt="" />
              <button onClick={handleClose}>Cerrar</button>
            </div>
          </div>
        )}
      </>
    );
  };

export default Popup