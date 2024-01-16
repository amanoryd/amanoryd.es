import React from 'react'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'

const CookiesPolicy = () => {

  const cookieSection = {
    maxWidth: "100%",
    padding: "25% 10%",
  }

  const cookieP = {
    padding: "3% 0",
  }

  return (
    <>
      <Nav />

        <section className="cookiePolicy" style={cookieSection}>

          <div>
            <h1>POLíTICA DE COOKIES</h1>
          </div>

          <div>
            <p style={cookieP}>
            Amano, Reformas y Decoración informa acerca del uso de las cookies en su página web: https://amanoryd.es
            </p>

            <h3>¿Qué son las cookies?</h3>
            <p style={cookieP}>
              Las cookies son archivos que se pueden descargar en su equipo a través de las páginas
              web. Son herramientas que tienen un papel esencial para la prestación de numerosos
              servicios de la sociedad de la información. Entre otros, permiten a una página web
              almacenar y recuperar información sobre los hábitos de navegación de un usuario o de
              su equipo y, dependiendo de la información obtenida, se pueden utilizar para
              reconocer al usuario y mejorar el servicio ofrecido.
            </p>

            <h3>Tipos de cookies</h3>
            <p style={cookieP}>
              Según quien sea la entidad que gestione el dominio desde donde se envían las cookies
              y trate los datos que se obtengan se pueden distinguir dos tipos:
              <ul>
                <li>
                  Cookies propias: aquéllas que se envían al equipo terminal del usuario desde un
                  equipo o dominio gestionado por el propio editor y desde el que se presta el
                  servicio solicitado por el usuario.
                </li>
                <li>
                  Cookies de terceros: aquéllas que se envían al equipo terminal del usuario
                  desde un equipo o dominio que no es gestionado por el editor, sino por otra
                  entidad que trata los datos obtenidos través de las cookies. 
                </li>
              </ul>
            </p>

            <p style={cookieP}>
              En el caso de que las cookies sean instaladas desde un equipo o dominio gestionado
              por el propio editor pero la información que se recoja mediante éstas sea gestionada
              por un tercero, no pueden ser consideradas como cookies propias. 
            </p>

            <p style={cookieP}>
              Existe también una segunda clasificación según el plazo de tiempo que permanecen
              almacenadas en el navegador del cliente, pudiendo tratarse de:
              <ul>
                <li>
                  Cookies de sesión: diseñadas para recabar y almacenar datos mientras el
                  usuario accede a una página web. Se suelen emplear para almacenar
                  información que solo interesa conservar para la prestación del servicio
                  solicitado por el usuario en una sola ocasión (p.e. una lista de productos
                  adquiridos)
                </li>
                <li>
                  Cookies persistentes: los datos siguen almacenados en el terminal y pueden ser
                  accedidos y tratados durante un periodo definido por el responsable de la
                  cookie, y que puede ir de unos minutos a varios años. 
                </li>
              </ul>
            </p>

            <p style={cookieP}>
              Por último, existe otra clasificación según la finalidad para la que se traten los datos
              obtenidos:
            </p>

            <ul style={cookieP}>
              <li>
                Cookies técnicas: aquellas que permiten al usuario la navegación a través de
                una página web, plataforma o aplicación y la utilización de las diferentes
                opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y
                la comunicación de datos, identificar la sesión, acceder a partes de acceso
                restringido, recordar los elementos que integran un pedido, realizar el proceso
                de compra de un pedido, realizar la solicitud de inscripción o participación en
                un evento, utilizar elementos de seguridad durante la navegación, almacenar
                contenidos para la difusión de vídeos o sonido o compartir contenidos a través
                de redes sociales. 
              </li>
              <li>
                Cookies de personalización: permiten al usuario acceder al servicio con algunas
                características de carácter general predefinidas en función de una serie de
                criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de
                navegador a través del cual accede al servicio, la configuración regional desde
                donde accede al servicio, etc.
              </li>
              <li>
                Cookies de análisis: permiten al responsable de las mismas, el seguimiento y
                análisis del comportamiento de los usuarios de los sitios web a los que están
                vinculadas. La información recogida mediante este tipo de cookies se utiliza en
                la medición de la actividad de los sitios web, aplicación o plataforma y para la
                elaboración de perfiles de navegación de los usuarios de dichos sitios,
                aplicaciones y plataformas, con el fin de introducir mejoras en función del
                análisis de los datos de uso que hacen los usuarios del servicio. 
              </li>
              <li>
                Cookies publicitarias: permiten la gestión, de la forma más eficaz posible, de los
                espacios publicitarios.
              </li>
              <li>
                Cookies de publicidad comportamental: almacenan información del
                comportamiento de los usuarios obtenida a través de la observación
                continuada de sus hábitos de navegación, lo que permite desarrollar un perfil
                específico para mostrar publicidad en función del mismo.
              </li>
              <li>
                Cookies de redes sociales externas: se utilizan para que los visitantes puedan
                interactuar con el contenido de diferentes plataformas sociales (facebook,
                youtube, twitter, linkedIn, etc.) y que se generen únicamente para los usuarios
                de dichas redes sociales. Las condiciones de utilización de estas cookies y la
                información recopilada se regula por la política de privacidad de la plataforma
                social correspondiente. 
              </li>
            </ul>

            <h2>Desactivación y eliminación de cookies</h2>
            <p style={cookieP}>
              Tienes la opción de permitir, bloquear o eliminar las cookies instaladas en tu equipo
              mediante la configuración de las opciones del navegador instalado en su equipo. Al
              desactivar cookies, algunos de los servicios disponibles podrían dejar de estar
              operativos. La forma de deshabilitar las cookies es diferente para cada navegador, pero
              normalmente puede hacerse desde el menú Herramientas u Opciones. También puede
              consultarse el menú de Ayuda del navegador dónde puedes encontrar instrucciones. El
              usuario podrá en cualquier momento elegir qué cookies quiere que funcionen en este
              sitio web.
            </p>

            <p style={cookieP}>
              Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante
              la configuración de las opciones del navegador instalado en su ordenador:
            </p>
            <ul style={cookieP}>
              <li>
                Microsoft Internet Explorer o Microsoft Edge: http://windows.microsoft.com/eses/windows-vista/Block-or-allow-cookies 
              </li>
              <li>
                Mozilla Firefox: http://support.mozilla.org/es/kb/impedir-que-los-sitios-webguarden-sus-preferencia 
              </li>
              <li>
                Chrome: https://support.google.com/accounts/answer/61416?hl=es 
              </li>
              <li>
                Safari: http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-lascookies/ 
              </li>
              <li>
                Opera: http://help.opera.com/Linux/10.60/es-ES/cookies.html 
              </li>
            </ul>

            <h2>Detalle de cookies utilizadas en https://amanoryd.es</h2>
              <p style={cookieP}>
                __Secure-1PAPISID <br />
                __Secure-3PSID <br />
                __Secure-3PSIDCC <br />
                __Secure-1PSIDTS <br />
                __Secure-1PSIDCC <br />
                __Secure-1PSID <br />
                SSID <br />
                APISID <br />
                SAPISID <br />
                APISID <br />
                __Secure-3PSIDTS <br />
                __Secure-3PAPISID <br />
                __Secure-1PAPISID <br />
                SID <br />
                SIDCC <br />
                HSID <br />
                sessionid <br />
                shbid <br />
                datr <br />
                ds_user_id <br />
                ig_did <br />
                __Secure-ENID <br />
                NID <br />
                mid <br />
                _ga <br />
                ph_phc <br />
                SEARCH_SAMESITE <br />
                __stripe_mid <br />
                ADS_VISITOR_ID <br />
                _gid <br />
                AEC <br />
                _gcl_au <br />
                1P_JAR <br />
                wp <br />
                moove_gdpr_popup <br />
                csrftoken <br />
                shbts <br />
              </p>

              <h2>Aceptación de la Política de cookies</h2>
              <p style={cookieP}>
                amanoryd.es asume que usted acepta el uso de cookies. No obstante, muestra
                información sobre su Política de cookies en la parte inferior o superior de cualquier
                página del portal con cada inicio de sesión con el objeto de que usted sea consciente.
              </p>

              <p style={cookieP}>Ante esta información es posible llevar a cabo las siguientes acciones:</p>

              <ul>
                <li>
                  Aceptar cookies. No se volverá a visualizar este aviso al acceder a cualquier
                  página del portal durante la presente sesión.
                </li>
                <li>Cerrar. Se oculta el aviso en la presente página.</li>
                <li>
                  Modificar su configuración. Podrá obtener más información sobre qué son las
                  cookies, conocer la Política de cookies de www.miempresa.es y modificar la
                  configuración de su navegador.
                </li>
              </ul>

          </div>

        </section>

      <Footer />
    </>
  )
}

export default CookiesPolicy