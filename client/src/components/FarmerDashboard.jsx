import React, { useState, useEffect } from 'react';
import ContractList from './ContractList';
import NewContractForm from './NewContractForm';

const FarmerDashboard = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    // Fetch contracts for the farmer from the backend
    // Update the state using setContracts
    // Example API call:
    // fetch('api/farmer/contracts')
    //   .then(response => response.json())
    //   .then(data => setContracts(data));
  }, []); // Run once on component mount

  return (
    <div>
      <h2>Farmer Dashboard</h2>
      <ContractList contracts={contracts} />
      {/* Add New Availability button that opens a form */}
      <NewContractForm />
    </div>
  );
};

export default FarmerDashboard;
