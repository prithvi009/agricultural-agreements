import React,{useEffect, useState} from 'react';
import ContractList from '../components/ContractList';
import { Link } from 'react-router-dom'; 



const BuyerDashboard = () => {

  const [contracts, setContracts] = useState([]);
  const buyerAdd = localStorage.getItem('user');
  const walletAddress = JSON.parse(buyerAdd)[0];
  const isBuyer = JSON.parse(buyerAdd)[3];


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
    <div >
      <h2 className='mt-10'>Buyer Dashboard</h2>
      <ContractList contracts={contracts}/>
      {
        isBuyer === '2' ? (
          <Link to="/dashboard/contract" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Create Contract
          </Link>
        ) : null
      }
    </div>
  );
};

export default BuyerDashboard;
