import React from "react";
import "./Section1.css";

function Section1() {
  return (
    <section className="container1">
      <div className="left1">
        <div className="l1-1">
          <h1>Confianza</h1>
          <p>
            Más de 10 años avalan nuestro trabajo. Con clientes que nos han
            encomendado la reforma de sus viviendas y negocios, siempre siendo
            consecuentes con nuestra filosofía de trabajo.
          </p>
          <img
            src="./section1-img/mockup/242shots_so.webp"
            alt="Cocina hecha a medida"
            width={"100%"}
          />
        </div>

        <div className="l1-2">
          <h1>Profesionalidad</h1>
          <p>
            Somos un equipo de profesionales cualificados en el ramo de la
            construcción, reformas e interiorismo que trabajamos en conjunto
            para obtener los mejores resultados.
          </p>
          <img
            src="./section1-img/mockup/351shots_so.webp"
            alt="Profesionales de las reformas"
            width={"100%"}
          />
        </div>
      </div>

      <div className="right1">
        <div className="r1-1">
          <img
            src="./section1-img/mockup/10shots_so.webp"
            alt="Diseño 3D"
            width={"100%"}
          />
          <h1>Diseño 3D</h1>
          <p>
            Realizamos los proyectos para que el cliente pueda verlos terminados
            incluso antes de comenzar la obra. Diseñamos con nuestros clientes
            todos los espacios y los trasladamos a la obra para que el resultado
            sea el esperado por ellos.
          </p>
          <img
            src="./section1-img/mockup/801shots_so.webp"
            alt="Visualiza tu proyecto terminado antes de comenzarlo"
            width={"100%"}
          />
        </div>
      </div>
    </section>
  );
}

export default Section1;
