import React from 'react';

// Componentes del sitio
import Nav from './components/nav/Nav';
// import Popup from './components/popup/Popup';
import Hero from './components/hero/Hero';
import Section1 from './components/section1/Section1';
import Profesionales from './components/profesionales/Profesionales';
import Blog from './components/blog/Blog';
import Proyectos from './components/proyectos/Proyectos';
import Stats from './components/stats/Stats';
import Proveedores from './components/proveedores/Proveedores';
import Testimonios from './components/testimonios/Testimonios';
import Footer from './components/footer/Footer';

// Hojas de estilos
import './index.css';
import './Breakpoints.css';
import './colorPalette.css';

const Main = () => {
  return (
    <>
      <Nav />
      {/* <Popup /> */}
      <Hero />
      <Section1 />
      <Profesionales />
      <Blog />
      <Proyectos />
      <Stats />
      <Proveedores />
      <Testimonios />
      <Footer />
    </>
  )
}

export default Main