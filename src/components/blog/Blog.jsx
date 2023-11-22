import React from "react";
import { useFetch } from "../../useFetch";
import "./Blog.css";

function Blog() {
  // URL Origen con la info del Blog en JSON.
  const { data } = useFetch("https://amanoryd.es/wp-json/wp/v2/posts");

  // función para cambiar el formato de la fecha que viene del JSON.
  const formatFecha = (fecha) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(fecha).toLocaleDateString("es-ES", options);
  };

  // Determinar la cantidad de posts a mostrar en función del ancho de la ventana
  const postsToShow = window.innerWidth <= 480 ? 4 : 6;

  // Filtrar las últimas entradas
  const latestPosts = data && data.slice(0, postsToShow);

  return (
    <section className="blog-container" id="blog">
      <div className="blog-wrap-top">
        <h4>BLOG</h4>
        <h1>Últimas entradas</h1>
        <p>
          Mantente al día con las últimas tendencias en Cocinas, Baños, Salones
          y Dormitorios.
        </p>
      </div>

      <div className="blog-wrap-bottom">
        <article className="blog-article">
          {latestPosts &&
            latestPosts.map((post) => (
              <span className="blog-item" key={post.id}>
                <img src={post.uagb_featured_image_src.medium[0]} alt="" />
                <div className="blog-item-wrap">
                  <h2>{post.title.rendered}</h2>
                  <p>{post.yoast_head_json.description}</p>
                  <h5>{post.yoast_head_json.author}</h5>
                  <h6>{formatFecha(post.date)}</h6>
                </div>
              </span>
            ))}
        </article>
      </div>
    </section>
  );
}

export default Blog;
