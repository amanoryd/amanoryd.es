import React from "react";
import "./Servicios.css";

const servData = [
  {
    img: "./servicios/servicios-01.webp",
    title: "Reformas",
    text: "Reformas integrales, Reformas de baños, Reformas de cocinas, Reformas de locales",
  },
  {
    img: "./servicios/servicios-02.webp",
    title: "Cocinas",
    text: "Encimeras de cocina, Muebles de cocina, Montaje de mobiliario de cocina",
  },
  {
    img: "./servicios/servicios-03.webp",
    title: "Baños",
    text: "Cambio de bañera por plato ducha, Mamparas de baño, Platos de ducha, Muebles de baño",
  },
  {
    img: "./servicios/servicios-04.webp",
    title: "Suelos",
    text: "Instalación de suelos laminados, Instalación de suelos vinílicos, Tarima flotante, Lijado y barnizado de parquet",
  },
  {
    img: "./servicios/servicios-05.webp",
    title: "Carpintería de aluminio",
    text: "Ventanas de aluminio, Puertas de aluminio, Cerramientos de aluminio",
  },
  {
    img: "./servicios/servicios-06.webp",
    title: "Puertas de paso",
    text: "Puertas lacadas, Puertas de Madera, Puertas Laminadas, Puertas de entrada acorazada, Puertas de entrada blindada",
  },
  {
    img: "./servicios/servicios-07.webp",
    title: "más servicios...",
    text: "Armarios, Pintura, Fontanería, Electricidad",
  },
];

const Servicios = () => {

  return (
    <section className="services">
      <h1>Servicios</h1>
      <p>
        Nos dedicamos a transformar tus ideas en realidad, convertimos tu visión
        en un hogar que refleje tu estilo y que cumpla con tus necesidades.
      </p>
      <div>
        <a href="/contacto" className="button-a1">
          SOLICITAR PRESUPUESTO
        </a>
      </div>
      <div className="services-container">
        {servData.map((servicio, index) => (
          <div key={index} className="services-card">
            <div className="services-image">
              <img src={servicio.img} alt={servicio.title} />
            </div>
            <h2>{servicio.title}</h2>
            <ul>
              {servicio.text.split(",").map((item, i) => (
                <li key={i}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <a href="/contacto" className="button-a1">
          SOLICITAR PRESUPUESTO
        </a>
      </div>
    </section>
  );
};

export default Servicios;
