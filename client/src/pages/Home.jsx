import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import image1 from '../images/a.jpg';
import image3 from '../images/c.jpg';
import image4 from '../images/d.jpg';


const images = [image3, image1, image4 /* Add more image URLs here... */];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleAutoPlay = () => {
      const nextImageIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextImageIndex);
    };

    const intervalId = setInterval(handleAutoPlay, 5000); // Change the delay here to adjust the slide interval

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [currentImageIndex]);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <ImageSlider
          images={images}
          currentImageIndex={currentImageIndex}
          handleImageChange={handleImageChange}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
