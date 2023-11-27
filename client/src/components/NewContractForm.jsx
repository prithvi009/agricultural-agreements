import React, { useState } from 'react';

const NewContractForm = () => {
  const [formData, setFormData] = useState({
    farmer: '',
    buyer: '',
    farmerName: '',
    buyerName: '',
    cropType: '',
    quantity: '',
    pricePerUnit: '',
    paymentMethod: '',
    deliveryDate: '',
    contractPeriod: '',
    termsAndConditions: '',
  });

  const handleFormSubmit = async () => {
    // Handle form submission (e.g., send data to the backend)
    // Example API call:
    // const response = await fetch('api/farmer/new-contract', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    // const data = await response.json();
    // console.log('Contract created:', data);

    // For blockchain interaction (assuming you have a function to handle this)
    // Example using web3.js or ethers.js:
    // const tx = await contract.methods.createAgreement(...Object.values(formData)).send({ from: buyer, gas: 3000000, gasPrice: 20000000000 });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h3>Create New Contract</h3>
      <form onSubmit={handleFormSubmit}>
        {/* Farmer and Buyer Details */}
        <div>
          <label>Farmer:</label>
          <input type="text" name="farmer" value={formData.farmer} onChange={handleChange} />
        </div>
        <div>
          <label>Buyer:</label>
          <input type="text" name="buyer" value={formData.buyer} onChange={handleChange} />
        </div>

        {/* Crop Details */}
        <div>
          <label>Crop Type:</label>
          <input type="text" name="cropType" value={formData.cropType} onChange={handleChange} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} />
        </div>

        {/* Pricing and Payment Details */}
        <div>
          <label>Price Per Unit:</label>
          <input type="text" name="pricePerUnit" value={formData.pricePerUnit} onChange={handleChange} />
        </div>
        <div>
          <label>Payment Method:</label>
          <input type="text" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} />
        </div>

        {/* Delivery and Contract Details */}
        <div>
          <label>Delivery Date:</label>
          <input type="text" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} />
        </div>
        <div>
          <label>Contract Period:</label>
          <input type="text" name="contractPeriod" value={formData.contractPeriod} onChange={handleChange} />
        </div>

        {/* Additional Terms and Conditions */}
        <div>
          <label>Terms and Conditions:</label>
          <textarea
            name="termsAndConditions"
            value={formData.termsAndConditions}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewContractForm;
