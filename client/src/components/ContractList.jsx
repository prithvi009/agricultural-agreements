import React from 'react';
const ContractList = ({ contracts }) => {
  return (
    <div>
      <h3>Contracts</h3>
      <ul>
        {contracts.map(contract => (
          <li key={contract.id}>{/* Display contract details here */}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default ContractList;
