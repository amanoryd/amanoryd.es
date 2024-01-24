import React from 'react';
import './CondensedScroll.css';

const TAGS = [
  { text: "Grohe", image: "./proveedores/grohe_logo.webp" },
  { text: "Geberit", image: "./proveedores/geberit_logo.webp" },
  { text: "Cucine Oggi", image: "./proveedores/cucine_oggi_logo.webp" },
  { text: "Neolith", image: "./proveedores/neolith_logo.webp" },
  { text: "Optimus Kitchen", image: "./proveedores/optimus_kitchen_logo.webp" },
  { text: "Pando", image: "./proveedores/pando_logo.webp" },
  { text: "Pergo", image: "./proveedores/pergo_logo.webp" },
  { text: "Roca", image: "./proveedores/roca_logo.webp" },
  { text: "Silestone", image: "./proveedores/silestone_logo.webp" },
  { text: "Nofer", image: "./proveedores/nofer_logo.webp" },
  { text: "Torvisco", image: "./proveedores/torvisco_logo.webp" },
  { text: "IMEX", image: "./proveedores/imex_logo.webp" },
];

const DURATION = 40000;
const ROWS = 1;
const TAGS_PER_ROW = 12;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ tag }) => (
  <div className="tag">
    <img src={tag.image} alt={tag.text} />
  </div>
);

const CondensedScroll = () => (
  <div className="app">
    <div className="tag-list">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2 === 0}
        >
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag tag={tag} key={tag.text} />
            ))}
        </InfiniteLoopSlider>
      ))}
    </div>
  </div>
);

export default CondensedScroll;
