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
          <Link to="/dashboard/contract" className=" fixed w-[190px] h-[50px] gap-2 right-[40px] bottom-[40px] flex justify-center items-center bg-blue-500 text-white  py-2 rounded-full hover:bg-blue-600 transition duration-300">
          <div className='bg-blue-700 flex rounded-full  p-2 items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#fafcff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></div>
          <div>Create Contract</div>
        </Link>
        ) : null
      }
    </div>
  );
};

export default BuyerDashboard;
