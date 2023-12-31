import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NewContractForm = () => {
  const buyerAdd = localStorage.getItem('user');
  const buyer = JSON.parse(buyerAdd)[0];
  const navigate = useNavigate();
  
  
  const [formData, setFormData] = useState({
    farmer: '0x0448D11632853DE1F86AfB26160822E1Fc2EC924',
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



  const handleChange = (e) => {
    setFormData({ ...formData, deliveryDate: e.target.value });

  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    try{
      const response = await fetch(`http://localhost:5001/agri/create/${buyer}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Contract created:', data);
      if (response.ok) {
        toast.success('Contract created successfully');
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }
    }
    catch(err){
      console.error('Error creating contract:', err);
      
    }
  };

  

  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
      <div className='font-class text-[3rem] font-extrabold'>Contract Form</div>
    <form className="mx-auto mt-[2rem] w-[40rem]" onSubmit={handleFormSubmit}>
      <div className='flex gap-10'>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="farmerName"
          id="farmerName"
          className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          value={formData.farmerName}
          onChange={(e)=> setFormData({...formData, farmerName: e.target.value})}
        />
        <label
          htmlFor="farmerName"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Farmer Name
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="buyerName"
          id="buyerName"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          value={formData.buyerName}
          onChange={(e)=> setFormData({...formData, buyerName: e.target.value})}
        />
        <label
          htmlFor="buyerName"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Buyer Name
        </label>
      </div>
      </div>

      <div className='flex gap-10'>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="cropType"
          id="cropType"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          value={formData.cropType}
          onChange={(e)=> setFormData({...formData, cropType: e.target.value})}
        />
        <label
          htmlFor="cropType"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Crop Type
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="quantity"
          id="quantity"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          value={formData.quantity}
          onChange={(e)=> setFormData({...formData, quantity: e.target.value} )}
        />
        <label
          htmlFor="quantity"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Quantity in kg
        </label>
      </div>
      </div>
      <div>
        <label
        htmlFor="quantity"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
        Wallet Address
        </label>
      </div>
      {/* Pricing and Payment Details */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="pricePerUnit"
          id="pricePerUnit"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          value={formData.pricePerUnit}
          onChange={(e)=> setFormData({...formData, pricePerUnit: e.target.value})}
        />
        <label
          htmlFor="pricePerUnit"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Price Per Unit
        </label>
        </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="paymentMethod"
          id="paymentMethod"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          value={formData.paymentMethod}
          onChange={(e)=> setFormData({...formData, paymentMethod: e.target.value})}
        />
        <label
          htmlFor="paymentMethod"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Payment Method
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="deliveryDate"
          id="deliveryDate"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder={formData.deliveryDate ? '' : 'MM/DD/YYYY'}
          required=""
          onChange={handleChange}
        />
        <label
          htmlFor="deliveryDate"
          className="peer:font-medium absolute text-sm text-gray-500 dark:text-gray-400 -translate-y-6 scale-75 top-3 -z-10 origin-[0] start-0 translate-x-1.99 rtl:-translate-x-0 rtl:start-auto peer-focus:text-blue-600 "
          >
          Delivery Date
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="contractPeriod"
          id="contractPeriod"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          value={formData.contractPeriod}
          onChange={(e)=> setFormData({...formData, contractPeriod: e.target.value})}
        />
        <label
          htmlFor="contractPeriod"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Contract Period
        </label>
      </div>

      {/* Terms and Conditions */}
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          name="termsAndConditions"
          id="termsAndConditions"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          value={formData.termsAndConditions}
          onChange={(e)=> setFormData({...formData, termsAndConditions: e.target.value})}
        ></textarea>
        <label
          htmlFor="termsAndConditions"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Terms and Conditions
        </label>
      </div>
      <div className='flex justify-center items-center w-full'>
        <button
        type="submit"
        className="text-white mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      </div>

    </form>
    <ToastContainer />
    </div>
  );
};

export default NewContractForm;


