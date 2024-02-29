import React, { useState, useEffect } from "react";
import BlogPosts from "./BlogPosts";
import "./Blog.css";

function Blog() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    // Obtener el ID del último post al montar el componente
    // Archivo con los posts del blog -> "BlogPosts.js"
    const sortedPosts = BlogPosts.sort((a, b) => b.id - a.id);
    const lastPostId = sortedPosts[0]?.id;
    setSelectedPostId(lastPostId);
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  const handlePost = (postId) => {
    // carga el post correspondiente
    setSelectedPostId(postId);
    handleTopClick();
  };

  const handleTopClick = () => {
    window.scrollTo({ top: 450, behavior: "smooth" });
  }

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
        <div className="blog-list">
          {BlogPosts.sort((a, b) => b.id - a.id) // Ordenar de mayor a menor por ID
            .map((post, index) => (
              <div key={index} style={{paddingBottom: "35px"}}>
                <img src={post.img} alt={`Imágen del post ${index + 1}`} style={{width: "100%"}}/>
                <h2>{post.title}</h2>
                <p>Autor: {post.author}</p>
                <p>Fecha: {post.date}</p>
                {/* <div dangerouslySetInnerHTML={{ __html: post.post }} /> */}
                <button onClick={() => handlePost(post.id)} style={{padding: "0 5px"}}>Leer más</button>
              </div>
            ))}
        </div>

        {selectedPostId && (
          <div id="blog-article">
            {/* Renderizar el contenido completo del post seleccionado */}
            <img
              src={BlogPosts.find((post) => post.id === selectedPostId).img}
              alt=""
            />
            <h2>
              {BlogPosts.find((post) => post.id === selectedPostId).title}
            </h2>
            <p>
              Fecha: {BlogPosts.find((post) => post.id === selectedPostId).date}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: BlogPosts.find((post) => post.id === selectedPostId)
                  .post,
              }}
            ></div>
            <p>
              Autor:{" "}
              {BlogPosts.find((post) => post.id === selectedPostId).author}
            </p>
            <button onClick={() => handleTopClick()} style={{ padding: "0 10px" }}>Volver arriba</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
