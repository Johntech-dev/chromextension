// ImageGallery.js
import React, { useState } from 'react';
import images from '../Data/imageData';

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button onClick={goToPreviousImage}>Previous</button>
        <img src={images[currentIndex].url} alt={images[currentIndex].alt} />
        <button onClick={goToNextImage}>Next</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {images.map((image) => (
          <div key={image.id} style={{ marginRight: '10px' }}>
            <img
              src={image.url}
              alt={image.alt}
              style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => setCurrentIndex(image.id - 1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
