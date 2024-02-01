import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

import "./styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Nav />
      <section className="privacyPolicy" style={{ margin: "200px 10%" }}>
        <h1>Política de Privacidad</h1>

        <p>Fecha de Vigencia: 01/02/2024</p>

        <p>
          En cumplimiento con la legislación de protección de datos vigente en
          España, presentamos la Política de Privacidad de Inversiones
          Patrimoniales Tresmu, S.L., operando bajo la denominación comercial
          Amano, Reformas y Decoración. Este documento detalla cómo gestionamos,
          protegemos y utilizamos la información personal proporcionada por
          nuestros usuarios.
        </p>

        <ol>
          <li>
            <h3>Datos Recopilados</h3>
            <p>
              En el ejercicio de nuestras operaciones, recopilamos información
              personal de manera limitada y pertinente para los fines
              específicos de la prestación de nuestros servicios. Estos datos
              pueden abarcar, entre otros:
            </p>
            <ul>
              <li>
                Información de contacto (nombre, dirección de correo
                electrónico, número de teléfono).
              </li>
              <li>Datos demográficos (ubicación, preferencias, intereses).</li>
              <li>Detalles de transacciones (en el caso de aplicabilidad).</li>
            </ul>
          </li>

          <li>
            <h3>Utilización de la Información</h3>
            <p>La información recopilada se utiliza con la finalidad de:</p>
            <ul>
              <li>
                Proporcionar y mantener nuestros servicios de reformas y
                decoración.
              </li>
              <li>
                Personalizar la experiencia del usuario de manera acorde con sus
                preferencias y necesidades.
              </li>
              <li>
                Procesar transacciones y suministrar información relacionada de
                manera eficiente.
              </li>
              <li>Mejorar constantemente nuestro sitio web y servicios.</li>
              <li>
                Enviar comunicaciones promocionales únicamente tras haber
                obtenido el consentimiento explícito del usuario.
              </li>
            </ul>
          </li>

          <li>
            <h3>Seguridad de la Información</h3>
            <p>
              Implementamos medidas técnicas y organizativas para garantizar la 
              confidencialidad y seguridad de la información personal. Estas 
              medidas cumplen con los estándares de seguridad de datos 
              establecidos por la legislación española.
            </p>
          </li>

          <li>
            <h3>No Divulgación a Terceros sin Consentimiento</h3>
            <p>
              Comprometidos con la confidencialidad, no divulgamos, vendemos ni 
              transferimos información personal a terceros sin el consentimiento 
              explícito del usuario, a menos que sea necesario para la prestación 
              de nuestros servicios o para cumplir con requisitos legales de 
              acuerdo con la legislación española de protección de datos.
            </p>
          </li>

          <li>
            <h3>Uso de Cookies y Tecnologías Similares</h3>
            <p>
              Nuestro sitio web utiliza cookies y tecnologías similares para 
              mejorar la experiencia del usuario. Los usuarios tienen la capacidad 
              de configurar sus navegadores para rechazar ciertas cookies, aunque 
              esto podría afectar la funcionalidad del sitio.
            </p>
          </li>

          <li>
            <h3>Enlaces a Sitios de Terceros</h3>
            <p>
              Nuestro sitio puede contener enlaces a sitios de terceros. No 
              asumimos responsabilidad por las prácticas de privacidad de estos 
              sitios y recomendamos revisar sus políticas de privacidad.
            </p>
          </li>

          <li>
            <h3>Cambios en la Política de Privacidad</h3>
            <p>
              Nos reservamos el derecho de actualizar esta política en cualquier 
              momento. La fecha de vigencia reflejará la última revisión. Se 
              recomienda a los usuarios revisar periódicamente esta página para 
              estar informados sobre cómo protegemos su información.
            </p>
          </li>

          <li>
            <h3>Contacto</h3>
          <p>
            Para preguntas o inquietudes sobre nuestras políticas de privacidad, 
            los usuarios pueden ponerse en contacto con nuestro equipo legal a 
            través de webadmin@amanoryd.es
          </p>
          </li>
        </ol>
        <br />
        <p>
          Este documento refleja nuestro compromiso con la protección de la 
          privacidad y la conformidad con las leyes vigentes de protección de 
          datos en España.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
