import React from 'react'
import './Profesionales.css';

function Profesionales() {
  return (
    <div className='profesionales1'>
        <h1>Profesionales de la transformación</h1>
        <p>
          Creamos espacios que inspiran y mejoran la vida de nuestros clientes.
          No te conformes con menos: elige a los expertos en reformas para dar 
          vida a tu hogar
        </p>

        {/* los estilos de este botón estan en el css 'Hero.css' */}
        <a className='button-a1' href="https://www.instagram.com/amano_reformas/">
          Síguenos en Instagram
        </a>
    </div>
  )
}

export default Profesionales