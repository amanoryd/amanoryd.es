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
          <div>
            <img src="./recurso-5boton.svg" alt="" />

            {counterState && (
              <>
                <svg id="projects" viewBox="0 0 380 380">
                  <circle cx={190} cy={190} r={175} className="color1"></circle>
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

          <div>
            <img src="./recurso-5boton.svg" alt="" />

            {counterState && (
              <>
                <svg id="clients" viewBox="0 0 380 380">
                  <circle cx={190} cy={190} r={175} className="color1"></circle>
                </svg>

                <CountUp
                  start={0}
                  end={100}
                  duration={3.5}
                  suffix="%"
                  delay={0.7}
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

          <div>
            <img src="./recurso-5boton.svg" alt="" />

            {counterState && (
              <>
                <svg id="design" viewBox="0 0 380 380">
                  <circle cx={190} cy={190} r={175} className="color1"></circle>
                </svg>

                <CountUp
                start={0}
                end={100}
                duration={4}
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
