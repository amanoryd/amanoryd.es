import React from "react";
import Nav from "../components/nav/Nav";
import Proyectos from "../components/proyectos/Proyectos";
import Footer from "../components/footer/Footer";
import "./styles/GaleriaPage.css";

const GaleriaPage = () => {
  return (
    <>
      <Nav />
      <div style={{marginTop: "80px"}}></div>
      <Proyectos />
      <Footer />
    </>
  );
};

export default GaleriaPage;
