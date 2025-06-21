import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import img1 from '../Assets/education1.png';
import img2 from '../Assets/education1.png';
import img3 from '../Assets/education1.png';

const images = [img1, img2, img3];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // changes image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="image-slider-wrapper">
      <div className="image-slider-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
    </div>
  );
};

export default ImageSlider;
