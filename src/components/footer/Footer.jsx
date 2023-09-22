import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="info1-1">
        <div className="bloque">
          <img src="./logov2.svg" alt="Amano, Reformas y Decoración" width={'250px'}/>
          <p>
            Comprometidos con la calidad a través de la innovación de productos
            y soluciones.
          </p>
          <span>iconos aquí</span>
        </div>

        <div className="bloque">
          <h1>Estamos en</h1>
          <p>Calle Historias de la radio 3, Portal 4 (local), 28018 Madrid</p>
          <h2>
            91 785 77 16
            <br />
            603 03 03 16
          </h2>
        </div>

        <div className="bloque">
          <h1>Enlaces</h1>
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Proyectos</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="bloque">
          <h1>Horario</h1>
          <span>
            Lunes a Viernes
            <br />
            9:00h - 14:00h
            <br />
            16:00h - 19:00h
          </span>
        </div>
      </div>

      <div>
        <p>Copyright © 2023 Amano, Reformas y Decoración</p>
      </div>
    </div>
  );
}

export default Footer;
