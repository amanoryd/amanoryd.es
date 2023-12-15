import React from "react";

const PanoramicView = ({ src }) => {
  return (
    <>
      {/* <iframe
        width="90%"
        height="500px"
        allowFullScreen={false}
        allow="accelerometer; magnetometer; gyroscope"
        style={{
          display: "block",
          margin: "20px auto",
          border: "0 none",
          maxWidth: "880px",
          borderRadius: "8px",
          boxShadow:
            "0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11)",
        }}
        src={src}
      ></iframe> */}

      <iframe
        width="90%"
        height="500px"
        title="Prueba Panoramica 360"
        scrolling="no"
        src={src}
        frameborder="0"
      ></iframe>
    </>
  );
};

export default PanoramicView;
