import React, { useState, useEffect } from 'react';
import ContractList from './ContractList';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NewContractForm from './NewContractForm';
const BuyerDashboard = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    // Fetch contracts for the buyer from the backend
    // Update the state using setContracts
    // Example API call:
    // fetch('api/buyer/contracts')
    //   .then(response => response.json())
    //   .then(data => setContracts(data));
  }, []); // Run once on component mount

  return (
    <div>
      <h2>Buyer Dashboard</h2>
      <ContractList contracts={contracts} />
      
      {/* Add New Contract button that opens a form */}
      {/* You can use a modal or a separate page for the form */}
      <Link to="/NewContractForm" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Create New Contract
      </Link>
    </div>
  );
};

export default BuyerDashboard;
