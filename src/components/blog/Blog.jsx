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

      <br />
      <br />

      <div>

        <div>
          <ul>
            {data &&
              data.map((post) => 
                <div key={post.id}>
                  <img src={post.uagb_featured_image_src.medium[0]} alt="" />
                  <div>{post.title.rendered}</div>
                  <div>{post.yoast_head_json.description}</div>
                  <div>{post.yoast_head_json.author}</div>
                  <div>{formatFecha(post.date)}</div>
                  <br /><br />
                </div>
              )
            }
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Blog;
