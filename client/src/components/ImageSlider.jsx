import React, { useState,useEffect } from 'react';
import '../App.css'
import image1 from '../images/a.jpg';
import image3 from '../images/c.jpg';
import image4 from '../images/d.jpg';

const images = [image3, image1, image4 ] 
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




  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change 5000 to the desired timeout duration in milliseconds

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount or slide change
  }, [currentImageIndex, images.length]);



  return (
    <div className="relative w-full h-96 ">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="object-cover w-full h-full"
      />
      <div className='flex flex-row justify-center items-center gap-2 mt-3'>      
        <div
        className="flex justify-center items-center cursor-pointer text-center rounded-full w-[40px] h-[40px] border-blue-700 bg-white border-2 px-2 py-1 hover:text-white hover:bg-blue-700"
        onClick={goToPrevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="10" viewBox="0 0 384 512" ><path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"/></svg>

      </div>
      <div
        className="flex justify-center items-center cursor-pointer  text-center rounded-full w-[40px] h-[40px] border-blue-700 bg-white border-2 px-2 py-1  hover:bg-blue-700"
        onClick={goToNextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="10" viewBox="0 0 384 512" className='my-svg-style'>
        <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/>
  </svg>
      </div>
      </div>
    </div>
  );
};

export default ImageSlider;
