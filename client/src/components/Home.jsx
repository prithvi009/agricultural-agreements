import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';

import ImageSlider from './ImageSlider'
import image1 from '../images/a.jpg'
import image2 from '../images/b.jpg'
import image3 from '../images/c.jpg'
import image4 from '../images/d.jpg'

const images = [
  image3,
  image1,
  image4
  // Add more image URLs here...
];


const Home = () => {
  return (
  <> 

      <Navbar/>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ImageSlider images={images} />

      
    </div>
    <Footer/>
    </>
  )
}

export default Home
