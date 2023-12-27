// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './Nav.css'

function Nav() {

  //Activa o desactiva el menú en dispositivos con pantalla <= 1024px
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>

    <header>
      <a href="index.html" className="brand">
        <img src="/logov2.svg" alt="Amano, Reformas y Decoración" width={180}/>
      </a>
      <div className={`menu-btn ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className={`navigation ${menuOpen ? "active" : ""}`}>
          <div className="navigation-items">
            <a href="/">Inicio</a>
            <a href="#proyectos">Proyectos</a>
            <a href="/blog">Blog</a>
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