import React from 'react';
import NewContractForm from './NewContractForm';
const ContractList = ({ contracts }) => {
  return (
    <div>
      <h3>Contracts</h3>
      <Link to="/contract" ><button > New Contract </button></Link>
      <ul>
        {contracts.map(contract => (
          <li key={contract.id}>{/* Display contract details here */}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default ContractList;
