import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import ContactUs from './pages/Contact';
import AboutUs from './pages/About';



function App() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}


export default App;


