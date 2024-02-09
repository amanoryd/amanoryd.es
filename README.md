# amanoryd.es

>[!INFO]
>
>React working in Vite (5.0.12) with HMR and some ESLint rules.


Tecnologías utlizadas en este proyecto:

![image](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![image](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![image](https://img.shields.io/badge/Adobe%20Creative%20Cloud-DA1F26?style=for-the-badge&logo=Adobe%20Creative%20Cloud&logoColor=white)
![image](https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white)
![image](https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white)
![image](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![image](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)
![image](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![image](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![image](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![image](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)
![image](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=WhatsApp&logoColor=white)
![image](https://img.shields.io/badge/Lighthouse-F44B21?style=for-the-badge&logo=Lighthouse&logoColor=white)
![image](https://img.shields.io/badge/windows%20terminal-4D4D4D?style=for-the-badge&logo=windows%20terminal&logoColor=white)
![image](https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white)
![image](https://img.shields.io/badge/Firefox_Browser-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)


## Estructura del Proyecto
**Carpetas principales:**
1. `./public` contiene todas las imágenes y videos utilizados en la web.
2. `./src/components` contiene todos los componentes principales y secundarios.
3. `./src/Pages` contiene el enrutado para las diferentes páginas.

En la carpeta "./src/components/" se encuentran los componentes principales del sitio web *amanoryd.es*
y la carpeta "./src/Pages" contiene las diferentes páginas enrutadas a traves de React-router-dom v6.22.0


## Dependencias
#### Íconos
* fortawesome/fontawesome-free: 6.4.2
* fortawesome/free-brands-svg-icons: 6.4.2
* fortawesome/react-fontawesome: 0.2.0
* react-icons: 5.0.1

#### Galería de Imágenes
* photoswipe: 5.4.3

#### Consentimiento de uso de Cookies
* react-cookie-consent: 9.0.0

#### Contador y disparador del scroll, utilizado en el componente `<Stats />`
* react-countup: 6.5.0
* react-scroll-trigger: 0.6.14

#### Detección de tamaño de pantalla y orientación
* react-device-detect: 2.2.3

#### Enrutamiento para el uso de diferentes páginas
* react-router-dom: 6.22.0


## Entorno de Desarrollo
Ejecutar `npm run dev`


## Uso de Componentes
Esta web está formada por componentes independientes, que en conjunto dan forma a la web, son componentes reutilizables, como por ejemplo se muestra el uso de los componentes que forman la página del **Blog**:
>`<Nav />` contiene **Logo** y **Menú de navegación**
>
>`<BlogPage />` contiene toda la información del **Blog**
>
>`<Footer />` contiene el pié de página


## Rutas y Navegación
El enrutamiento de las páginas está definido en el archivo `index.jsx`, a traves del uso de los Hooks `{ createBrowserRouter, RouterProvider }` de la dependencia `react-router-dom`.

Los enlaces a las diferentes páginas funcionan a traves del hook `Link` contenidos en el `Nav` y `Footer`
>Ejemplo:
>
>`<Link to="/">Inicio</Link>` para ir al menú inicio

El uso de `Link` en el `Footer` lleva asociado una función para ejecutar un desplazamiento (scroll) con smooth al top de la web.


## Recursos Externos
Se utiliza la API de Google Maps e Instagram para obtener data actualizada en formato JSON de los respectivos servicios.
>Reseñas de Google Maps
>
>Posts de Instagram

La llamada a las API se hacen a traves de la importación del archivo `useFetch.js` creado especificamente para esta función, independientemente del proveedor API y de la clave API.
- Por ejemplo, para hacer la llamada de datos de la API de Google Maps (Reviews) se pasan como parámetro la URL completa del servicio `https://proxy-server-a72q3zhwqq-no.a.run.app/` y el **ID** establecido por Google Maps para negocios, "Amano, Reformas y Decoración" `placeId=ChIJ672_FNElQg0RgJGNkyozTQY`.
- Esta URL compuesta, se pasa como parámetro a `useFetch.js` y este ejecuta el async await para capturar la data actualizada de la API.

>[!IMPORTANT]
>
>`https://proxy-server-a72q3zhwqq-no.a.run.app/` es un servidor de proxy-backend alojado en **Google Cloud** utilizado para permitir el uso de CORS en la web de amanoryd.es | lenguaje y tecnología utilizada: `express`, `cors` y `axios`. Este proxy sólo permite el cors-origin desde la web **https://amanoryd.es**, si se intenta ejecutar esta secuencia de comandos desde el modo desarrollador, LOCAL u otro origen web, el mismo bloqueará dicha petición. Este servidor es administrado por [@oliverosd81](https://github.com/oliverosd81).

>[!IMPORTANT]
>
>Las claves API de estos servicios estan almacenadas como variables de entorno en `NETLIFY` y `Google Cloud`.


## Licencia

Este proyecto es de propiedad privada y está protegido por derechos de autor. No se concede ningún derecho de uso, modificación o distribución a terceros sin el permiso explícito del propietario.

Todos los derechos reservados. El uso no autorizado está estrictamente prohibido.