import React, { useState } from "react";
import "./Stats.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <section className="stats-container">
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="stats-wrap">
          {/* PROYECTOS FINALIZADOS */}
          <div>
            <img src="./recurso-5boton.svg" alt="" />

            {counterState && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 380 380"
                >
                  <circle
                    cx={190}
                    cy={190}
                    r={175}
                    fill="none"
                    strokeWidth={30}
                    stroke="#efefef"
                  />
                  <circle
                    cx={190}
                    cy={190}
                    r={175}
                    className="circle_animated"
                    id="projects"
                  />
                </svg>

                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                  suffix="%"
                  style={{
                    position: "relative",
                    zIndex: "5",
                  }}
                />
              </>
            )}
            <p
              style={{
                position: "relative",
                zIndex: "5",
              }}
            >
              Proyectos
              <br />
              finalizados
            </p>
          </div>

          {/* CLIENTES SATISFECHOS */}
          <div>
            <img src="./recurso-5boton.svg" alt="" />

            {counterState && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 380 380"
                >
                  <circle
                    cx={190}
                    cy={190}
                    r={175}
                    fill="none"
                    strokeWidth={30}
                    stroke="#efefef"
                  />
                  <circle
                    cx={190}
                    cy={190}
                    r={175}
                    className="circle_animated"
                    id="clients"
                  />
                </svg>

                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                  suffix="%"
                  delay={0.5}
                  style={{
                    position: "relative",
                    zIndex: "5",
                  }}
                />
              </>
            )}
            <p
              style={{
                position: "relative",
                zIndex: "5",
              }}
            >
              Clientes
              <br />
              satsfechos
            </p>
          </div>

          {/* DISEÑO 3D */}
          <div>
            <img src="./recurso-5boton.svg" alt="" />

            {counterState && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 380 380"
                >
                  <circle
                    cx={190}
                    cy={190}
                    r={175}
                    fill="none"
                    strokeWidth={30}
                    stroke="#efefef"
                  />
                  <circle
                    cx={190}
                    cy={190}
                    r={175}
                    className="circle_animated"
                    id="design"
                  />
                </svg>

                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                  suffix="%"
                  delay={1}
                  style={{
                    position: "relative",
                    zIndex: "5",
                  }}
                />
              </>
            )}
            <p
              style={{
                position: "relative",
                zIndex: "5",
              }}
            >
              Diseño
              <br />
              3D
            </p>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default Stats;
