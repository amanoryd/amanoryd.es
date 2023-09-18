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
        <img decoding="async" className="img-slide active" src="1.webp" ></img>
        <img decoding="async" className="img-slide" src="2.webp" ></img>
        <img decoding="async" className="img-slide" src="3.webp" ></img>
        <img decoding="async" className="img-slide" src="4.webp" ></img>
        <img decoding="async" className="img-slide" src="5.jpg" ></img>
        
        <div className="content active">
          <h1>USSF-44.<br /><span>Mission</span></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna anime. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum daily web design nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </p>
          <a href="#">Read More</a>
        </div>

        <div className="content">
          <h1>STARSHIP UPDATE.<br /><span>Rocket</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href="#">Read More</a>
        </div>

        <div className="content">
          <h1>INTELSAT.<br /><span>G-31MISSION</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href="#">Read More</a>
        </div>

        <div className="content">
          <h1>NASA ASTRONAUTS.<br /><span>THE MOON</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href="#">Read More</a>
        </div>

        <div className="content">
          <h1>Space Travel.<br /><span>Rocket</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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