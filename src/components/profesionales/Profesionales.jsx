import React from "react";
import { useFetch } from "../../useFetch";
import "./Profesionales.css";

function Profesionales() {
  // Constantes para manejo de la llamada a la URL del API de Instagram, con su respectivo token (llave almacenada en "Variables de Entorno" del servidor)
  const apiToken = import.meta.env.VITE_REACT_APP_API_INSTAGRAM_TOKEN;

  // ESTOY LIMITANDO LA CARGA DE CONTENIDO EN EL JSON A LOS ULTIMOS 9 POST DE INSTAGRAM DIRECTAMENTE EN LA LLAMADA A LA URL "limit=9"
  const instagramUrl = useFetch(
    `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=9&access_token=${apiToken}`
  );

  // Constante para optimizar el uso de los datos dentro del JSX.
  const jsonFormat = instagramUrl.data;

  return (
    <section className="profesionales1">
      <h1>Profesionales de la transformación</h1>
      <p>
        Creamos espacios que inspiran y mejoran la vida de nuestros clientes. No
        te conformes con menos: elige a los expertos en reformas para dar vida a
        tu hogar
      </p>

      {/* los estilos de este botón estan en el css 'Hero.css' */}
      <a className="button-a1" href="https://www.instagram.com/amano_reformas/"
        aria-label="Ir al Instagram de Amano Reformas y Decoración">
        Síguenos en Instagram
      </a>

      {/* HE DIVIDIDO EN TRES PARTES DIFERENTES LA CARGA DE LA API POR MOTIVOS DE MEJORAS VISUALES */}

      <div id="feed-container">
        
        {/* PRIMER ROW */}
        <div id="main-gallery">
          {jsonFormat &&
            jsonFormat.data.slice(0, 3).map((post) => (
              <div key={post.id} id="feed-content" className="overflow">
                {post.media_url.includes(".mp4") ? (
                  // Si la URL del medio contiene ".mp4", usa un elemento de video
                  <video controls playsInline muted loop style={{aspectRatio: "1"}}>
                    <source src={post.media_url} type="video/mp4" />
                    Tu navegador no admite el elemento de video.
                  </video>
                ) : (
                  // Si no, usa un elemento de imagen
                  <img src={post.media_url} alt="Post"/>
                )}
                <div className="opacity-hover">
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caption"
                    aria-label="Ver publicación completa en Instagram"
                  >
                    <p>{post.caption.slice(0, 100)}...</p>
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* SEGUNDO ROW */}
        <div id="main-gallery">
        {jsonFormat &&
            jsonFormat.data.slice(3, 6).map((post) => (
              <div key={post.id} id="feed-content" className="overflow">
                {post.media_url.includes(".mp4") ? (
                  // Si la URL del medio contiene ".mp4", usa un elemento de video
                  <video controls playsInline muted loop style={{aspectRatio: "1"}}>
                    <source src={post.media_url} type="video/mp4" />
                    Tu navegador no admite el elemento de video.
                  </video>
                ) : (
                  // Si no, usa un elemento de imagen
                  <img src={post.media_url} alt="Post" />
                )}
                <div className="opacity-hover">
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caption"
                    aria-label="Ver publicación completa en Instagram"
                  >
                    <p>{post.caption.slice(0, 100)}...</p>
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* TERCER ROW */}
        <div id="main-gallery">
        {jsonFormat &&
            jsonFormat.data.slice(6, 9).map((post) => (
              <div key={post.id} id="feed-content" className="overflow">
                {post.media_url.includes(".mp4") ? (
                  // Si la URL del medio contiene ".mp4", usa un elemento de video
                  <video controls playsInline muted loop style={{aspectRatio: "1"}}>
                    <source src={post.media_url} type="video/mp4" />
                    Tu navegador no admite el elemento de video.
                  </video>
                ) : (
                  // Si no, usa un elemento de imagen
                  <img src={post.media_url} alt="Post" />
                )}
                <div className="opacity-hover">
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caption"
                    aria-label="Ver publicación completa en Instagram"
                  >
                    <p>{post.caption.slice(0, 100)}...</p>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div style={{ marginTop: "5%" }}>
        {/* los estilos de este botón estan en el css 'Hero.css' */}
        <a
          className="button-a1"
          href="https://www.instagram.com/amano_reformas/"
          aria-label="Ir al Instagram de Amano Reformas y Decoración"
        >
          Síguenos en Instagram
        </a>
      </div>
    </section>
  );
}

export default Profesionales;
