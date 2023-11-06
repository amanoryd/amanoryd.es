import React from "react";
import { useFetch } from "../../useFetch";
import "./Blog.css";

function Blog() {
  // URL Origen con la info del Blog en JSON.
  const { data } = useFetch("https://amanoryd.es/wp-json/wp/v2/posts");

  // función para cambiar el formato de la fecha que viene del JSON.
  const formatFecha = (fecha) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(fecha).toLocaleDateString('es-ES', options);
  };


  // Filtrar las últimas 6 entradas
  const latestPosts = data && data.slice(0, 6);

  return (
    <div className="blog1">
      <div className="blog-container">
        <h4>BLOG</h4>
        <h1>Últimas entradas</h1>
        <p>
          Mantente al día con las últimas tendencias en Cocinas, Baños, Salones
          y Dormitorios.
        </p>
      </div>

      <div>

        <div>
          <div className="blog-flex">
          {latestPosts &&
              latestPosts.map((post) => (
                <span className="blog-items" key={post.id}>
                  <img src={post.uagb_featured_image_src.medium[0]} alt="" />
                  <h2>{post.title.rendered}</h2>
                  <p>{post.yoast_head_json.description}</p>
                  <h5>{post.yoast_head_json.author}</h5>
                  <h6>{formatFecha(post.date)}</h6>
                  <br /><br />
                </span>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Blog;
