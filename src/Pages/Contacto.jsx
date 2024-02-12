import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
// Utilizo librería React-Icons en este documento
import { FaMapPin, FaPhoneVolume } from "react-icons/fa6";

// COMPORTAMIENTO RESPONSIVE DENTRO DE ESTE ARCHIVO CSS //
import "../Pages/styles/Contacto.css";

const Contacto = () => {
  const handleDirectionsClick = () => {
    // Coordenadas //
    const latitude = "40.38026613327212";
    const longitude = "-3.6556973738123415";

    // URL de Google Maps con las coordenadas
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

    // Abre la URL en una nueva pestaña
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <>
      <Nav />
      <section className="contact">
        <div className="content">
          <div>
            <h2>Página de Contacto</h2>
            <p>Rellena este formulario y cuentanos qué necesitas.</p>
          </div>

          <div>
            <h1></h1>
          </div>
        </div>

        <div className="container">
          <div className="contactForm">
            <form name="contact" action="/contact" method="post" netlify>
              <input type="hidden" name="form-name" value="contact" />
              <h2>Déjanos un mensaje</h2>
              <div className="inputBox">
                <input type="text" name="name" required />
                <span>Nombre</span>
              </div>
              <div className="inputBox">
                <input type="email" name="email" required />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input type="tel" name="phone" required />
                <span>Teléfono de contácto</span>
              </div>
              <div className="inputBox">
                <textarea name="message" required></textarea>
                <span>Escribe tu mensaje...</span>
              </div>
              <div className="inputBox">
                <div data-netlify-recaptcha="true"></div>
                <input type="submit" value="Enviar" />
              </div>
            </form>
          </div>

          <div class="contactInfo">
            <div class="box">
              <a href="javascript:void(0)" onClick={handleDirectionsClick}>
                <div class="icon">
                  <FaMapPin />
                </div>
                <div class="text">
                  <h3>Amano, Reformas y Decoración</h3>
                  <p>
                    Calle Historias de la Radio 3, Portal 4 (Local)
                    <br />
                    28018 Madrid
                  </p>
                </div>
              </a>
            </div>

            <div class="box">
              <a href="javascript:void(0)">
                <div class="icon">
                  <FaPhoneVolume />
                </div>
                <div class="text">
                  <h3>Teléfono</h3>
                  <p>+34 917 85 77 16</p>
                  <p>+34 603 03 03 16</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contacto;
