import React, { useState, useEffect } from 'react';
import ContractList from '../components/ContractList';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NewContractForm from '../components/NewContractForm';
const BuyerDashboard = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
   
  }, []); 


  return (
    <div>
      <h2>Buyer Dashboard</h2>
      <Link to="/contract" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Create Contract
      </Link>
      <ContractList contracts={contracts} />
      
      
      <Link to="/NewContractForm" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Create New Contract
      </Link>
    </div>
  );
};

export default BuyerDashboard;
