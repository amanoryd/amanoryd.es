import React from "react";
import "./Proyectos.css";
import PanoramicView from "./PanoramicView";

function Proyectos() {
  return (
    <section className="proyectos-container" id="proyectos">
      <h1>Proyectos</h1>
      <div className="proyectos-wrap-top">
        <PanoramicView src={'http://renderstuff.com/tools/360-panorama-web-viewer-embed/?image=https://amanoryd.netlify.app/panoramic/prueba-panoramica-360.png'}/>
        <PanoramicView src={'https://panoraven.com/en/embed/dgE8z7c9u3'}/>
      </div>
    </section>
  );
}

export default Proyectos;
