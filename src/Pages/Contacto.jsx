import React, { useState } from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
// Utilizo librería React-Icons en este documento
import { FaMapPin, FaPhoneVolume } from "react-icons/fa6";

// COMPORTAMIENTO RESPONSIVE DENTRO DE ESTE ARCHIVO CSS //
import "../Pages/styles/Contacto.css";

const Contacto = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleDirectionsClick = () => {
    // Coordenadas //
    const latitude = "40.38026613327212";
    const longitude = "-3.6556973738123415";

    // URL de Google Maps con las coordenadas
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

    // Abre la URL en una nueva pestaña
    window.open(googleMapsUrl, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setFormStatus("¡Mensaje enviado correctamente! Te contactaremos pronto.");
        form.reset();
      })
      .catch((error) => {
        setFormStatus("Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.");
        console.error(error);
      });
  };

  return (
    <>
      <Nav />
      <section className="contact">
        <div className="content">
          <div>
            <h2>Página de Contacto</h2>
            <p>Rellena este formulario y cuéntanos qué necesitas.</p>
          </div>
        </div>

        <div className="container">
          <div className="contactForm">
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Campo honeypot oculto para prevenir spam */}
              <p style={{ display: "none" }}>
                <label>
                  No llenes esto si eres humano: <input name="bot-field" />
                </label>
              </p>

              <h2>Déjanos un mensaje</h2>
              
              <div className="inputBox">
                <input type="text" id="name" name="name" autoComplete="on" required />
                <span htmlFor="name">Nombre</span>
              </div>
              
              <div className="inputBox">
                <input type="email" id="email" name="email" autoComplete="on" required />
                <span htmlFor="email">Email</span>
              </div>
              
              <div className="inputBox">
                <input type="tel" id="phone" name="phone" autoComplete="on" required />
                <span htmlFor="phone">Teléfono de contacto</span>
              </div>
              
              <div className="inputBox">
                <textarea id="message" name="message" autoComplete="off" required></textarea>
                <span htmlFor="message">Escribe tu mensaje...</span>
              </div>
              
              <div className="inputBox">
                <input type="submit" value="Enviar" />
              </div>

              {formStatus && (
                <p style={{ 
                  marginTop: "1rem", 
                  padding: "0.75rem", 
                  backgroundColor: formStatus.includes("error") ? "#fee" : "#efe",
                  borderRadius: "4px",
                  textAlign: "center"
                }}>
                  {formStatus}
                </p>
              )}
            </form>
          </div>

          <div className="contactInfo">
            <div className="box">
              <a href="#" onClick={(e) => { e.preventDefault(); handleDirectionsClick(); }}>
                <div className="icon">
                  <FaMapPin />
                </div>
                <div className="text">
                  <h3>Amano, Reformas y Decoración</h3>
                  <p>
                    Calle Historias de la Radio 3, Portal 4 (Local)
                    <br />
                    28018 Madrid
                  </p>
                </div>
              </a>
            </div>

            <div className="box">
              <a href="tel:+34917857716">
                <div className="icon">
                  <FaPhoneVolume />
                </div>
                <div className="text">
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