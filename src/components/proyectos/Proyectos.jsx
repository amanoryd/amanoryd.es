import React from "react";
import "./Proyectos.css";
import PanoramicView from "./PanoramicView";

function Proyectos() {
  return (
    <section className="proyectos-container" id="proyectos">
      <h1>Proyectos</h1>
      <div className="proyectos-wrap-top">
        <PanoramicView src={'https://panoraven.com/en/embed/pONT4bREcb'}/>
        <PanoramicView src={'https://panoraven.com/en/embed/dgE8z7c9u3'}/>
      </div>
    </section>
  );
}

export default Proyectos;
