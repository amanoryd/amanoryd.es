import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone
// } from "@fortawesome/free-brands-svg-icons";

import "../Pages/styles/Contacto.css"

const Contacto = () => {
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

            <form name="contact" action="/contact" method="post">
              <input type="hidden" name="form-name" value="contact"/>
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
                <input type="submit" value="Enviar" />
              </div>
            </form>

          </div>

			    <div class="contactInfo">

				    <div class="box">
					    <a class="icon"><FontAwesomeIcon icon={faPhone} /></a>
					    <div class="text">
						    <h3>Amano, Reformas y Decoración</h3>
						    <p>Calle Historias de la radio 3<br />28018 Madrid</p>
				      </div>
            </div>

				    <div class="box">
					    <div class="icon"><ion-icon name="call-outline"></ion-icon></div>
					    <div class="text">
						    <h3>Teléfono</h3>
						    <p>+34 917 85 77 16</p>
                <p>+34 603 03 03 16</p>
					    </div>
				    </div>

            <div>
				      <h2 class="txt">Síguenos en</h2>
              <ul class="sci">
                <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
              </ul>
            </div>

          </div>

        </div>

      </section>
      <Footer />
    </>
  );
};

export default Contacto;
