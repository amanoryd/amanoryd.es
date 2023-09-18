import React from "react";
import './Nav.css'

function Nav() {

  return (
    <>

    <header>
      <a href="#" className="brand">Amano</a>
        <div className="menu-btn">
          <div className="navigation">
            <div className="navigation-items">
              <a href="#">Inicio</a>
              <a href="#">Proyectos</a>
              <a href="#">Blog</a>
              <a href="#">Contacto</a>
              <a href="#">WhatsApp</a>
                </div>
            </div>
        </div>
    </header>
    
    </>
  )
}

export default Nav