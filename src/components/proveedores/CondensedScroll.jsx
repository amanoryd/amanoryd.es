import React from 'react';
import './CondensedScroll.css';

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2"
];

const TAGS = [
  { text: "", image: "./proveedores/grohe_logo.webp" },
  { text: "", image: "./proveedores/geberit_logo.webp" },
  { text: "", image: "./proveedores/cucine_oggi_logo.webp" },
  { text: "", image: "./proveedores/neolith_logo.webp" },
  { text: "", image: "./proveedores/optimus_kitchen_logo.webp" },
  { text: "", image: "./proveedores/pando_logo.webp" },
  { text: "", image: "./proveedores/pergo_logo.webp" },
  { text: "", image: "./proveedores/roca_logo.webp" },
  { text: "", image: "./proveedores/silestone_logo.webp" },
  { text: "", image: "./proveedores/nofer_logo.webp" },
  { text: "", image: "./proveedores/torvisco_logo.webp" },
  { text: "", image: "./proveedores/imex_logo.webp" },
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
    <span></span> {tag.text}
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
