import React, { useState } from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderNav = (manual) => {
    setActiveSlide(manual);
  };

  return (
    <div className="container">
      <section className="home">
        {[0, 1, 2, 3, 4].map((index) => (
          <video
            key={index}
            className={`video-slide ${index === activeSlide ? 'active' : ''}`}
            src={`/${index}.mp4`}
            autoPlay
            muted
            loop
          ></video>
        ))}

        {[0, 1, 2, 3, 4].map((index) => (
          <div key={index} className={`content ${index === activeSlide ? 'active' : ''}`}>
            <h1>
              {index === 0 && 'Profesionales'}
              {index === 1 && 'Hogar'}
              {index === 2 && 'Reformas'}
              {index === 3 && 'Hogar Mejorado.'}
              {index === 4 && 'Somos'}
              <br />
              <span>{index === 0 && 'de la Transformación.'}</span>
              <span>{index === 1 && 'Renovado'}</span>
              <span>{index === 2 && 'Personalizadas'}</span>
              <span>{index === 3 && 'Vida Mejorada.'}</span>
              <span>{index === 4 && 'Amano, reformas y decoración.'}</span>
            </h1>
            <p>
              {index === 0 &&
                'Calidad, confianza y resultados excepcionales. Descubre por qué somos la elección número uno para reformas en Madrid.'}
              {index === 1 && 'Creamos espacios que inspiran y mejoran la vida de nuestros clientes.'}
              {index === 2 &&
                'Somos un equipo de expertos en reformas, con años de experiencia y una pasión por el diseño y la funcionalidad. Nuestro enfoque personalizado garantiza que tu espacio refleje tu estilo y necesidades.'}
              {index === 3 && 'Déjanos hacer realidad tus ideas y crear el hogar de tus sueños.'}
              {index === 4 && ''}
            </p>
            <a href="#">Read More</a>
          </div>
        ))}

        <div className="media-icons">
          <a href="https://www.facebook.com/amanoreformas/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/amano_reformas/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.twitter.com/amanoryd/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        <div className="slider-navigation">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`nav-btn ${index === activeSlide ? 'active' : ''}`}
              onClick={() => sliderNav(index)}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Hero;