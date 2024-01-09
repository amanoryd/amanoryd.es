import React from "react";
import { useFetch } from "../../useFetch";
import "./Testimonios.css";

const Testimonios = () => {
  // Constantes para manejar la llamada a la API (con Token y PlaceID de Google Maps)

  // Uso el componente useFetch para llamar la API de Google Mapsa traves del servidor backend-proxy
  // NOTA IMPORTANTE: el uso del servidor proxy está restringido por políticas CORS a que solo tiene
  // acceso la url https://amanoryd.es. A este servidor no se puede acceder desde el entorno de desarrollo,
  // es decir, no se puede acceder desde las url de http://localhost*
  const googleMapsUrl = useFetch(
    "https://proxy-server-a72q3zhwqq-no.a.run.app/places?placeId=ChIJ672_FNElQg0RgJGNkyozTQY"
  );

  // Convierto la data de la API en una constante para facilitar el manejo de los datos
  const jsonFormatGMaps = googleMapsUrl.data;
    console.log(jsonFormatGMaps);

  // Si la data aún no ha cargado, muestra un mensaje de carga
  if (!jsonFormatGMaps) {
    return <div>Cargando...</div>;
  }

  // Filtrar las reseñas con más de 3 estrellas
  const filteredReviews =
    jsonFormatGMaps?.result?.reviews
      ?.filter((review) => review.rating > 3)
      ?.slice(0, 4);

  // Función para capitalizar la inicial de los nombres de los clientes
  const formatName = (name) => {
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Función para generar las estrellas en formato SVG
  const renderStarRating = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    // Dibujar estrellas completas
    for (let i = 0; i < fullStars; i++) {
      stars.push(<use href="#star" key={i} x={i * 20} fill="#ffd055" />);
    }

    // Dibujar media estrella si es necesario
    if (hasHalfStar) {
      stars.push(
        <use href="#star-half" key="half" x={fullStars * 20} fill="#ffd055" />
      );
    }

    // Dibujar estrellas vacías para completar el total
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < totalStars; i++) {
      stars.push(<use href="#star" key={i} x={i * 20} fill="#ddd" />);
    }

    return stars;
  };

  return (
    <section className="testimonios-container">
      <div className="testimonios-wrapper">
        <h1>Testimonios</h1>
        <p>Lo que opinan nuestros Clientes</p>

        <div className="header-reviews">
          <div className="header-wrapper">
            <img src="./Google__G__logo.png" alt="Google logo" />
            <img
              src="./five_stars_maps.svg"
              alt="4.2"
              style={{ width: "200px" }}
            />
            <h3>4,2</h3>
          </div>
          <h2 style={{ textAlign: "center" }}>Amano, Reformas y Decoración</h2>
        </div>
      </div>

      <div className="reviews-container">
        <div className="reviews-wrapper">
          {filteredReviews &&
            filteredReviews.map((review) => (
              <div key={review.author_name} id="reviews-content">
                <img src={review.profile_photo_url} alt={review.author_name} />
                <h2 style={{ textAlign: "center" }}>
                  {formatName(review.author_name)}
                </h2>
                <h3>{review.rating} estrellas</h3>

                {/* Imágen SVG de las estrellas según el rating */}
                <svg width="100" height="20" viewBox="0 0 100 20">
                  <defs>
                    <polygon
                      id="star"
                      points="10,0 13,6 20,7 15,12 17,20 10,15 3,20 5,12 0,7 7,6"
                    />
                    <polygon
                      id="star-half"
                      points="10,0 13,6 20,7 15,12 17,20 10,15"
                    />
                  </defs>
                  <g>{renderStarRating(filteredReviews[0].rating)}</g>
                </svg>

                <p>{review.text.slice(0, 200)}...</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
