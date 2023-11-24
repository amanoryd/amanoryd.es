import React from "react";
import "./Proyectos.css";

function Proyectos() {
  return (
    <section className="proyectos-container" id="proyectos">
      <h1>Proyectos</h1>
      <div className="proyectos-wrap-top">
        <iframe
          width="90%"
          height="500px"
          allowFullScreen={false}
          allow="accelerometer; magnetometer; gyroscope"
          style={{
            display: "block",
            margin: "20px auto",
            border: "0 none",
            maxWidth: "880px",
            borderRadius: "8px",
            boxShadow:
              "0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11)",
          }}
          src="https://panoraven.com/en/embed/pONT4bREcb"
        ></iframe>
      </div>
      <div className="proyectos-wrap-top">
        <iframe
          width="90%"
          height="500px"
          allowFullScreen={false}
          allow="accelerometer; magnetometer; gyroscope"
          style={{
            display: "block",
            margin: "20px auto",
            border: "0 none",
            maxWidth: "880px",
            borderRadius: "8px",
            boxShadow:
              "0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11)",
          }}
          src="https://panoraven.com/en/embed/dgE8z7c9u3"
        ></iframe>
      </div>
    </section>
  );
}

export default Proyectos;
