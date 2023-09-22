import React from 'react';
import ReactDOM from 'react-dom/client';

// Contenido del website
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Section1 from './components/section1/Section1';
import Footer from './components/footer/Footer';

import './index.css';
import './Breakpoints.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Section1 />
    <Footer />
  </React.StrictMode>,
);