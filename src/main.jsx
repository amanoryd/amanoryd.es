import React from 'react';
import ReactDOM from 'react-dom/client';

// Contenido del website
import Nav from './components/nav/Nav';
import Popup from './components/popup/Popup';
import Hero from './components/hero/Hero';
import Section1 from './components/section1/Section1';
import Profesionales from './components/profesionales/Profesionales';
import Blog from './components/blog/Blog';
import Proyectos from './components/proyectos/Proyectos';
import Stats from './components/stats/Stats';
import Proveedores from './components/proveedores/Proveedores';
import Testimonios from './components/testimonios/Testimonios';
import Footer from './components/footer/Footer';

import './index.css';
import './Breakpoints.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Popup />
    <Hero />
    <Section1 />
    <Profesionales />
    <Blog />
    <Proyectos />
    <Stats />
    <Proveedores />
    <Testimonios />
    <Footer />
  </React.StrictMode>,
);