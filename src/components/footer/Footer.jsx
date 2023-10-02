import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="info1-1">
        <div className="bloque">
          <img
            src="./logov2.svg"
            alt="Amano, Reformas y Decoración"
            width={"75%"}
          />
          <p>
            Comprometidos con la calidad a través de la innovación de productos
            y soluciones.
          </p>

            <span className="media-icons">
              <a href="https://www.facebook.com/amanoreformas/">
                <FontAwesomeIcon icon={faFacebookF} />
                 {/* Facebook */}
              </a>
              <a href="https://www.instagram.com/amano_reformas/">
                <FontAwesomeIcon icon={faInstagram} />
                {/* Instagram */}
              </a>
              <a href="https://www.twitter.com/amanoryd/">
                <FontAwesomeIcon icon={faTwitter} />
                {/* Twitter */}
              </a>
            </span>
        </div>

        <div className="bloque">
          <h2>Estamos en</h2>
          <p>Calle Historias de la radio 3, Portal 4 (local), 28018 Madrid</p>
          <h2>
            91 785 77 16
            <br />
            603 03 03 16
          </h2>
        </div>

        <div className="bloque">
          <h2>Enlaces</h2>
          <ul>
            <li>
              <a href="./index.html">Inicio</a>
            </li>
            <li>
              <a href="#">Proyectos</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="bloque">
          <h2>Horario</h2>
          <span>
            Lunes a Viernes
            <br />
            9:00h - 14:00h
            <br />
            16:00h - 19:00h
          </span>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2023 Amano, Reformas y Decoración</p>
      </div>
    </footer>
  );
}

export default Footer;
