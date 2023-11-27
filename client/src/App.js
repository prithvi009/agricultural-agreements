import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import ContactUs from './components/Contact';
import AboutUs from './components/About';



function App() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}


export default App;


