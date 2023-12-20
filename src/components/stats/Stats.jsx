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
            {counterState && (
              <CountUp start={0} end={100} duration={3} suffix="%" />
            )}
            <p>
              Proyectos
              <br />
              finalizados
            </p>
          </div>

          <div>
            {counterState && (
              <CountUp
                start={0}
                end={100}
                duration={3.5}
                suffix="%"
                delay={0.7}
              />
            )}
            <p>
              Clientes
              <br />
              satsfechos
            </p>
          </div>

          <div>
            {counterState && (
              <CountUp 
								start={0} 
								end={100} 
								duration={4} 
								suffix="%" 
								delay={1} 
							/>
            )}
            <p>
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
