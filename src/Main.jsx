// eslint-disable-next-line no-unused-vars
import React from "react";

// Componentes del sitio
import Nav from "./components/nav/Nav";
// import Popup from './components/popup/Popup';
import Hero from "./components/hero/Hero";
import Section1 from "./components/section1/Section1";
import Servicios from "./components/servicios/Servicios";
import Profesionales from "./components/profesionales/Profesionales";
import Proyectos from "./components/proyectos/Proyectos";
import Stats from "./components/stats/Stats";
import Proveedores from "./components/proveedores/Proveedores";
import Testimonios from "./components/testimonios/Testimonios";
import Footer from "./components/footer/Footer";

import CookieConsent from "react-cookie-consent";

import { Link, useNavigate } from "react-router-dom";

// Hojas de estilos
import "./index.css";
import "./Breakpoints.css";
import "./colorPalette.css";

const Main = () => {
  // eslint-disable-next-line no-unused-vars
  const history = useNavigate();

  const handleLinkClick = () => {
    // Desplazar al top de la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Nav />
      {/* <Popup /> */}
      <Hero />
      <Section1 />
      <Servicios />
      <Profesionales />
      <Proyectos />
      <Stats />
      <Testimonios />
      <Proveedores />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        enableDeclineButton
        declineButtonText="Rechazar"
        cookieName="CookieNotice"
        style={{ background: "var(--low-tone)" }}
        buttonStyle={{
          color: "var(--color-uno)",
          background: "var(--complement2)",
          fontSize: "13px",
        }}
        expires={30}
        onAccept={() => {
          console.log("Cookie consent accepted!");
          gtag("consent", "update", {
            ad_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
          });
        }}
      >
        Usamos cookies para mejorar la experiencia de usuario, mostrar contenido
        personalizado y analizar el tráfico de nuestra web. Al hacer click en
        &quot;Aceptar&quot;, apruebas el consentimiento de nuestro uso de
        cookies.{" "}
        <Link to="/cookies" onClick={handleLinkClick}>
          Leer más
        </Link>
      </CookieConsent>
    </>
  );
};

export default Main;
