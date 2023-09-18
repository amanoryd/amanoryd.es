import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {

  const menuBtn = useRef(null);
  const navigation = useRef(null);

  useEffect(() => {
    const handleMenuClick = () => {
      menuBtn.current.classList.toggle('active');
      navigation.current.classList.toggle('active');
    };

    // Verifica si los elementos existen antes de agregar eventos
    if (menuBtn.current && navigation.current) {
      menuBtn.current.addEventListener('click', handleMenuClick);
    }

    // Limpia el evento cuando el componente se desmonta
    return () => {
      if (menuBtn.current && navigation.current) {
        menuBtn.current.removeEventListener('click', handleMenuClick);
      }
    };
  }, []);

  return (
		<>
      <section className="home">

        <video className="img-slide" src="./public/1.mp4" autoPlay muted loop></video>
        <video className="img-slide" src="./public/2.mp4" autoPlay muted loop></video>
        
        <div className="content active">
          <h1>Profesionales de la<br /><span>Transformación</span></h1>
          <p>
            Calidad, confianza y resultados excepcionales. Descubre por qué somos la elección 
            número uno para reformas en Madrid.
          </p>
          <a href="#">Read More</a>
        </div>

        <div className="content">
          <h1>Hogar<br /><span>Renovado</span></h1>
          <p>
            Creamos espacios que inspiran y mejoran la vida de nuestros clientes.
          </p>
          <a href="#">Read More</a>
        </div>

        <div className="content">
          <h1>Reformas<br /><span>Personalizadas</span></h1>
          <p>
            Somos un equipo de expertos en reformas, con años de experiencia y una pasión por el 
            diseño y la funcionalidad. Nuestro enfoque personalizado garantiza que tu espacio 
            refleje tu estilo y necesidades.
          </p>
          <a href="#">Read More</a>
        </div>

        <div className="content">
          <h1>Hogar mejorado.<br /><span>Vida mejorada.</span></h1>
          <p>
            Déjanos hacer realidad tus ideas y crear el hogar de tus sueños.
          </p>
          <a href="#">Read More</a>
        </div>

        <div className="content">
          <h1>Somos<br /><span>@mano, reformas y decoración</span></h1>
          <p>

          </p>
          <a href="#">Read More</a>
        </div>

        <div className="media-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>

        <div className="slider-navigation">
          <div className="nav-btn active"></div>
          <div className="nav-btn"></div>
          <div className="nav-btn"></div>
          <div className="nav-btn"></div>
          <div className="nav-btn"></div>
        </div>

      </section>
		</>
  )
}

export default Hero