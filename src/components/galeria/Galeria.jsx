import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const Galeria = (props) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
      pinchToClose: true,
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [props.galleryID]);

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      {props.images.slice().reverse().map((image, index) => (  // 🔹 Aplica el orden inverso aquí
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
          loading="lazy"
        >
          <img src={image.thumbnailURL} alt="" loading="lazy" />
        </a>
      ))}
    </div>
  );
};

export default Galeria;
