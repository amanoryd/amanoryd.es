import React, { useState } from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import { FaMapPin, FaPhoneVolume } from "react-icons/fa6";
import "../Pages/styles/Contacto.css";

const Contacto = () => {
  const [formStatus, setFormStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDirectionsClick = () => {
    const latitude = "40.38026613327212";
    const longitude = "-3.6556973738123415";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(googleMapsUrl, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus("");

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      // Enviar a Netlify Forms
      console.log("Enviando a Netlify Forms...");
      const netlifyResponse = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (!netlifyResponse.ok) {
        throw new Error("Error en Netlify Forms");
      }
      console.log("✅ Netlify Forms OK");

      // Enviar correo de confirmación
      console.log("Enviando correo de confirmación...");
      const emailResponse = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Status de email:", emailResponse.status);
      const emailResult = await emailResponse.json();
      console.log("Respuesta de email:", emailResult);

      if (!emailResponse.ok) {
        console.error("Error en envío de email:", emailResult);
        throw new Error(
          emailResult.error ||
            emailResult.message ||
            "Error al enviar el correo"
        );
      }

      console.log("✅ Email enviado correctamente");
      setFormStatus(
        "¡Mensaje enviado correctamente! Recibirás un correo de confirmación en breve."
      );
      form.reset();
    } catch (error) {
      console.error("❌ Error en handleSubmit:", error);
      setFormStatus(
        `Error: ${error.message}. Por favor, intenta de nuevo o llámanos directamente.`
      );
    } finally {
      setIsLoading(false);
    }
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

              <p style={{ display: "none" }}>
                <label>
                  No llenes esto si eres humano: <input name="bot-field" />
                </label>
              </p>

              <h2>Déjanos un mensaje</h2>

              <div className="inputBox">
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="on"
                  required
                  disabled={isLoading}
                />
                <span htmlFor="name">Nombre</span>
              </div>

              <div className="inputBox">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="on"
                  required
                  disabled={isLoading}
                />
                <span htmlFor="email">Email</span>
              </div>

              <div className="inputBox">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="on"
                  required
                  disabled={isLoading}
                />
                <span htmlFor="phone">Teléfono de contacto</span>
              </div>

              <div className="inputBox">
                <textarea
                  id="message"
                  name="message"
                  autoComplete="off"
                  required
                  disabled={isLoading}
                ></textarea>
                <span htmlFor="message">Escribe tu mensaje...</span>
              </div>

              <div className="inputBox">
                <input
                  type="submit"
                  value={isLoading ? "Enviando..." : "Enviar"}
                  disabled={isLoading}
                  style={{
                    opacity: isLoading ? 0.6 : 1,
                    cursor: isLoading ? "not-allowed" : "pointer",
                  }}
                />
              </div>

              {formStatus && (
                <p
                  style={{
                    marginTop: "1rem",
                    padding: "0.75rem",
                    backgroundColor: formStatus.includes("error")
                      ? "#fee"
                      : "#d4edda",
                    color: formStatus.includes("error") ? "#721c24" : "#155724",
                    border: `1px solid ${
                      formStatus.includes("error") ? "#f5c6cb" : "#c3e6cb"
                    }`,
                    borderRadius: "4px",
                    textAlign: "center",
                  }}
                >
                  {formStatus}
                </p>
              )}
            </form>
          </div>

          <div className="contactInfo">
            <div className="box">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleDirectionsClick();
                }}
              >
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
