import './Nav.css'

function Nav() {

  return (
    <>

    <header>
      <a href="#" className="brand">@mano</a>

      {/* boton de menu en responsive*/}
      <div className="menu-btn"></div>

      {/* menu normal */}
      <div className="navigation">
        <div className="navigation-items">
          <a href="#">Inicio</a>
          <a href="#">Proyectos</a>
          <a href="#">Blog</a>
          <a href="#">Contacto</a>
        </div>
      </div>
    </header>
    
    </>
  )
}

export default Nav