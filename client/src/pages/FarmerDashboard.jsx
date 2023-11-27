import React, { useState, useEffect } from 'react';
import ContractList from '../components/ContractList';
import NewContractForm from '../components/NewContractForm';

const FarmerDashboard = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    
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
