import React from "react";
import "./Proyectos.css";
import Galeria from "../galeria/Galeria";

function Proyectos() {
  return (
    <section className="proyectos-container" id="proyectos">
      <h1>Proyectos</h1>
      <div className="proyectos-wrapper">
        <div className="proyectos-gallery">
          {/* Estoy utilizando componente 'PhotoSwipe' para crear la galería de imágenes (ver 'Galeria.jsx') */}
          <Galeria
            galleryID="proyectos-column"
            images={[
              {
                largeURL: "./proyectos/1-1/render-cocina-1465x1099-0001.jpg",
                thumbnailURL: "./proyectos/1-1/render-cocina-mini-0001.webp",
                width: 1465,
                height: 1099,
              },
              {
                largeURL: "./proyectos/1-1/render-cocina-1465x1099-0002.jpg",
                thumbnailURL: "./proyectos/1-1/render-cocina-mini-0002.webp",
                width: 1465,
                height: 1099,
              },
              {
                largeURL: "./proyectos/1-1/render-cocina-1465x1099-0003.jpg",
                thumbnailURL: "./proyectos/1-1/render-cocina-mini-0003.webp",
                width: 1465,
                height: 1099,
              },
              {
                largeURL: "./proyectos/1-1/render-cocina-1465x1099-0004.jpg",
                thumbnailURL: "./proyectos/1-1/render-cocina-mini-0004.webp",
                width: 1465,
                height: 1099,
              },
              {
                largeURL: "./proyectos/1-1/render-cocina-1465x1099-0005.jpg",
                thumbnailURL: "./proyectos/1-1/render-cocina-mini-0005.webp",
                width: 1465,
                height: 1099,
              },
            ]}
          />
        </div>

        <div className="proyectos-gallery">
          {/* Estoy utilizando componente 'PhotoSwipe' para crear la galería de imágenes (ver 'Galeria.jsx') */}
          <Galeria
            galleryID="proyectos-column"
            images={[
              {
                largeURL: "./proyectos/1-2/casa-2142x2856-0969.webp",
                thumbnailURL: "./proyectos/1-2/casa-mini-0969.webp",
                width: 2142,
                height: 2856,
              },
              {
                largeURL: "./proyectos/1-2/casa-1512x2016-0982.webp",
                thumbnailURL: "./proyectos/1-2/casa-mini-0982.webp",
                width: 1512,
                height: 2016,
              },
            ]}
          />
          <Galeria
            galleryID="proyectos-column"
            images={[
              {
                largeURL: "./proyectos/1-2/casa-1512x2016-0984.webp",
                thumbnailURL: "./proyectos/1-2/casa-mini-0984.webp",
                width: 1512,
                height: 2016,
              },
              {
                largeURL: "./proyectos/1-2/casa-1512x2016-0990.webp",
                thumbnailURL: "./proyectos/1-2/casa-mini-0990.webp",
                width: 1512,
                height: 2016,
              },
              {
                largeURL: "./proyectos/1-2/casa-1512x2016-0996.webp",
                thumbnailURL: "./proyectos/1-2/casa-mini-0996.webp",
                width: 1512,
                height: 2016,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
