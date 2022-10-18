import Carousel from "react-bootstrap/Carousel";
import React from "react";

const Carrousel = ({ images }) => {
  // se pasa por prop o context el array de fotos
  return (
    <>
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            {images.map((image, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                className={i === 0 ? "active" : ""}
                data-bs-slide-to={i}
                aria-label={`Slide ${i + 1}`}
                {...(i === 0 && {
                  "aria-current": "true",
                })}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {images.map((image, i) => (
              <div
                key={i}
                className={`carousel-item${i === 0 ? " active" : ""}`}
              >
                <img
                  src={image.url}
                  className="d-block w-100"
                  alt={image.title}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carrousel;
