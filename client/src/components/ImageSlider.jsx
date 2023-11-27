import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full h-96 -mt-[19rem]">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="object-cover w-full h-full"
      />
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 px-2 py-1 rounded"
        onClick={goToPrevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 px-2 py-1 rounded"
        onClick={goToNextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
