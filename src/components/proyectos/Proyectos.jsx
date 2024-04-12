import React from "react";
import "./Proyectos.css";
import Galeria from "../galeria/Galeria";

function Proyectos() {
  return (
    <section className="proyectos-container" id="proyectos">
      <h1>Proyectos</h1>
      <p>Algunos de nuestros trabajos destacados</p>

      {/* Estoy utilizando componente 'PhotoSwipe' para crear la galería de imágenes (ver 'Galeria.jsx') */}
      <Galeria
        galleryID="proyectos-masonry"
        images={[
          {
            largeURL: "./proyectos/1-5/1-5-1500x2000-1.webp",
            thumbnailURL: "./proyectos/1-5/1-5-mini-1.webp",
            width: 1500,
            height: 2000,
          },
          {
            largeURL: "./proyectos/1-5/1-5-1500x2000-2.webp",
            thumbnailURL: "./proyectos/1-5/1-5-mini-2.webp",
            width: 1500,
            height: 2000,
          },
          {
            largeURL: "./proyectos/1-4/1-4-1536x2048-4.webp",
            thumbnailURL: "./proyectos/1-4/1-4-mini-4.webp",
            width: 1536,
            height: 2048,
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
          {
            largeURL: "./proyectos/1-6/1-6-768x1024-1.webp",
            thumbnailURL: "./proyectos/1-6/mini-1-6-768x1024-1.webp",
            width: 768,
            height: 1024,
          },
          {
            largeURL: "./proyectos/1-6/1-6-768x1024-2.webp",
            thumbnailURL: "./proyectos/1-6/mini-1-6-768x1024-2.webp",
            width: 768,
            height: 1024,
          },
          {
            largeURL: "./proyectos/1-6/1-6-768x1024-3.webp",
            thumbnailURL: "./proyectos/1-6/mini-1-6-768x1024-3.webp",
            width: 768,
            height: 1024,
          },
          {
            largeURL: "./proyectos/1-6/1-6-768x1024-4.webp",
            thumbnailURL: "./proyectos/1-6/mini-1-6-768x1024-4.webp",
            width: 768,
            height: 1024,
          },
          {
            largeURL: "./proyectos/1-6/1-6-768x1024-6.webp",
            thumbnailURL: "./proyectos/1-6/mini-1-6-768x1024-6.webp",
            width: 768,
            height: 1024,
          },
          {
            largeURL: "./proyectos/1-7/cocina-1536x2048-0001.webp",
            thumbnailURL: "./proyectos/1-7/cocina-1536x2048-0001-mini.webp",
            width: 1536,
            height: 2048,
          },
          // {
          //   largeURL: "./proyectos/1-7/cocina-1536x2048-0002.webp",
          //   thumbnailURL: "./proyectos/1-7/cocina-1536x2048-0002-mini.webp",
          //   width: 1536,
          //   height: 2048,
          // },
          // {
          //   largeURL: "./proyectos/1-7/cocina-1536x2048-0003.webp",
          //   thumbnailURL: "./proyectos/1-7/cocina-1536x2048-0003-mini.webp",
          //   width: 1536,
          //   height: 2048,
          // },
          {
            largeURL: "./proyectos/1-7/cocina-1536x2048-0004.webp",
            thumbnailURL: "./proyectos/1-7/cocina-1536x2048-0004-mini.webp",
            width: 1536,
            height: 2048,
          },
          {
            largeURL: "./proyectos/1-8/bano-1536x2048-0001.webp",
            thumbnailURL: "./proyectos/1-8/bano-1536x2048-0001-mini.webp",
            width: 1536,
            height: 2048,
          },
          {
            largeURL: "./proyectos/1-8/bano-1536x2048-0002.webp",
            thumbnailURL: "./proyectos/1-8/bano-1536x2048-0002-mini.webp",
            width: 1536,
            height: 2048,
          },
          {
            largeURL: "./proyectos/1-8/bano-1536x2048-0003.webp",
            thumbnailURL: "./proyectos/1-8/bano-1536x2048-0003-mini.webp",
            width: 1536,
            height: 2048,
          },
        ]}
      />
      {/* <button className="button-a1" style={{cursor: "pointer"}}>Ver más</button> */}
    </section>
  );
}

export default Proyectos;
