import React from 'react';


const ContractList = ({contracts}) => {

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-4xl font-bold mb-8 text-center text-white bg-indigo-700 p-4 rounded">List of Contracts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {contracts.map((contract, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">{contract[4]}</h3>
            <p className="text-gray-400 mb-2">Seller: {contract[2]}</p>
            <p className="text-gray-400 mb-2">Quantity: {contract[5]} kg</p>
            <p className="text-gray-400 mb-2">Price Per Unit: {contract[6]}</p>
            <p className="text-gray-400 mb-2">Delivery Date: {contract[8]}</p>
            <p className="text-gray-400">Terms and Conditions: {contract[10]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractList;
