import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const history = useNavigate();

  const handleLinkClick = () => {
    // Desplazar al top de la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="info1-1">
        <div className="bloque">
          <Link to="/" onClick={handleLinkClick}>
            <img
              src="./logov2.svg"
              alt="Amano, Reformas y Decoración"
              width={"75%"}
            />
          </Link>
          <p>
            Comprometidos con la calidad a través de la innovación de productos
            y soluciones.
          </p>

          <span className="media-icons">
            <a
              href="https://www.facebook.com/amanoreformasydecoracion/?locale=es_ES"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
              {/* Facebook */}
            </a>
            <a href="https://www.instagram.com/amano_reformas/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
              {/* Instagram */}
            </a>
            <a href="https://www.twitter.com/amanoryd/" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
              {/* Twitter */}
            </a>
          </span>
        </div>

        <div className="bloque">
          <h2>Estamos en</h2>
          <p>Calle Historias de la Radio 3, Portal 4 (Local), 28018 Madrid</p>
          <h2>
            +34 917 85 77 16
            <br />
            +34 603 03 03 16
          </h2>
        </div>

        <div className="bloque">
          <h2>Enlaces</h2>
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/proyectos" onClick={handleLinkClick}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleLinkClick}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contacto" onClick={handleLinkClick}>
                Contacto
              </Link>
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
        <p>Copyright © 2024 Amano, Reformas y Decoración</p>
        <Link to="/cookies" onClick={handleLinkClick}>
          Política de cookies
        </Link>
        <Link to="/privacy" onClick={handleLinkClick}>
          Política de Privacidad
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
