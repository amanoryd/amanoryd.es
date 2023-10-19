import React from "react";
import { useFetch } from "../../useFetch";
import './Blog.css';

function Blog() {
  const { data } = useFetch('https://amanoryd.es/wp-json/wp/v2/posts');

  return (
    <div className='blog1'>
      <div className='blog-container'>
        <h4>BLOG</h4>
        <h1>Últimas entradas</h1>
        <p>Mantente al día con las últimas tendencias en Cocinas, Baños, Salones y Dormitorios.</p>
      </div>

      <br /><br />

      <div>
        <h2>AQUI LAS ENTRADAS DEL BLOG</h2><br /><br />
        <ul>
          {data && data.map(post => (
            <li key={post.id}>{post.title.rendered}</li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default Blog