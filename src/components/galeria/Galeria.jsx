import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#my-gallery",
  children: "a",
  pswpModule: () => import("photoswipe"),
});
lightbox.init();

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
  }, []);

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      {props.images.map((image, index) => (
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
