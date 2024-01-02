// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <a href="https://reformas.amanoryd.es" className="Amano, Reformas y Decoración">
        <img src="/logov2.svg" alt="Amano, Reformas y Decoración" width={180}/>
      </a>
      <div className={`menu-btn ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className={`navigation ${menuOpen ? "active" : ""}`}>
          <div className="navigation-items">
            <Link to="/">Inicio</ Link>
            <a href="#proyectos">Proyectos</a>
            <Link to="/blog">Blog</Link>
            <a href="#">Contacto</a>
            <a href="https://wa.me/34603030316" target="_blank">WhatsApp</a>
              </div>
          </div>
      </div>
    </header>
    
    </>
  )
}

export default Nav