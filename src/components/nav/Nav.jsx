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
      <Link to="/" className="Amano, Reformas y Decoración">
        <img src="/logov2.svg" alt="Amano, Reformas y Decoración" width={180}/>
      </Link>
      <div className={`menu-btn ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className={`navigation ${menuOpen ? "active" : ""}`}>
          <div className="navigation-items">
            <Link to="/">Inicio</ Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/blog">Blog</Link>
            <a href="/contacto">Contacto</a>
            <a href="https://wa.me/34603030316" target="_blank">WhatsApp</a>
              </div>
          </div>
      </div>
    </header>
    
    </>
  )
}

export default Nav