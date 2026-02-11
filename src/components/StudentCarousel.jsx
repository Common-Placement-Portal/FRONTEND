import React, { useState, useEffect } from 'react';
import img1 from '../assets/images/cdac1.jpg.png';
import img2 from '../assets/images/cdac2.jpg.png';
import img3 from '../assets/images/cdac3.jpg.png';
import img4 from '../assets/images/cdac4.jpg.png';

const StudentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const carouselStyle = {
    position: 'relative',
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
  };

  const slideStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
    transition: 'opacity 1s ease-in-out'
  };

  const activeSlideStyle = {
    ...slideStyle,
    opacity: 1
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const dotsContainerStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
    zIndex: 10
  };

  const dotStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.3s',
    border: '1px solid rgba(255,255,255,0.3)'
  };

  return (
    <div style={carouselStyle}>
      {images.map((image, index) => (
        <div 
          key={index}
          style={index === currentSlide ? activeSlideStyle : slideStyle}
        >
          <img src={image} alt={`CDAC Campus ${index + 1}`} style={imageStyle} />
        </div>
      ))}
      
      <div style={dotsContainerStyle}>
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              ...dotStyle,
              background: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentCarousel;
