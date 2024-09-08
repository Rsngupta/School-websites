import React from 'react';
import Slider from "react-slick";
import '../styles/Gallery.css';

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Display 3 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  // Auto slide every 2 seconds
    pauseOnHover: true,
  };

  return (
    <div className="gallery-container">
      <h1>School Gallery</h1>
      <Slider {...settings}>
        <div className="gallery-slide">
          <img src="image1-url" alt="Event 1" />
        </div>
        <div className="gallery-slide">
          <img src="image2-url" alt="Event 2" />
        </div>
        <div className="gallery-slide">
          <img src="image3-url" alt="Event 3" />
        </div>
        <div className="gallery-slide">
          <img src="image4-url" alt="Event 4" />
        </div>
        <div className="gallery-slide">
          <img src="image5-url" alt="Event 5" />
        </div>
        <div className="gallery-slide">
          <img src="image6-url" alt="Event 6" />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
