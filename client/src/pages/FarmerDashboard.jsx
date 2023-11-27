import React, { useState, useEffect } from 'react';
import ContractList from '../components/ContractList';
import NewContractForm from '../components/NewContractForm';

const FarmerDashboard = () => {

  const [contracts, setContracts] = useState([]);
  const buyerAdd = localStorage.getItem('user');
  const walletAddress = JSON.parse(buyerAdd)[0];

  const fetchContracts = async () => {


    try{
      const res = await fetch(`http://localhost:5001/agri/${walletAddress}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setContracts(data);
      console.log(data);
    }
    catch(error){
      console.error('Error during fetching contracts:', error);
    }
  };


  useEffect(() => {
    fetchContracts();
    // eslint-disable-next-line
  },[]); 

  return (
    <div>
      <h2>Farmer Dashboard</h2>
      <ContractList contracts={contracts} />
    </div>
  );
};

export default FarmerDashboard;
