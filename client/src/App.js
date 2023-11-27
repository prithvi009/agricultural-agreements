import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import ContactUs from './pages/Contact';
import AboutUs from './pages/About';
import BuyerDashboard from './pages/BuyerDashboard';
import NewContractForm from './components/NewContractForm';



function App() {
  const [user, setUser] = React.useState(null);
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route path="/dashboard" element={<BuyerDashboard/>} />
        <Route path="/dashboard/contract" element={<NewContractForm/>} />
      </Routes>
    </div>
  );
}


export default App;


