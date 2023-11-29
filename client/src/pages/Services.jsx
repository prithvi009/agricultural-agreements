import React, { useState } from 'react';

const OurServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-[7rem]">
      <h2 className="text-[5rem] font-semibold mb-6 text-blue-600 text-center mt-[8rem]">Our Services</h2>

      {/* Hello world */}
      <div className='flex flex-row gap-2 justify-center relative'>

            {/* Service 1 */}
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Buyer Assurance
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                As a buyer, you get the assurance that your raw materials will be delivered on time. Our platform enables you to create contracts with farmers, ensuring a secure and timely supply chain for your business.
              </p>
              
            </div>



  


          <div className="flex flex-row gap-2 justify-center">
            {/* Service 1 */}
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Farmer Assurance
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Farmers receive the assurance that their crops will be purchased at an agreed-upon price. By creating contracts with buyers, farmers can protect their yields from market fluctuations and ensure a stable income.
              </p>

            </div>

            {/* Add more services as needed */}
          </div>



          <div className="flex flex-row gap-2 justify-center">
            {/* Service 1 */}
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Smart Contract Automation
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Our platform leverages smart contract technology to automate and secure agreements between farmers and buyers. Through self-executing contracts, both parties are ...
              </p>

            </div>

            {/* Add more services as needed */}
          </div>

      </div>

    </div>
  );
};

export default OurServicesPage;
