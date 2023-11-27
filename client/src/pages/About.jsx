// src/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto mt-[90px] p-6">
      <div className="max-w-2xl mx-auto pb-4 text-center flex justify-center items-center ">
        <h1 className="text-[5rem] font-extrabold text-blue-600 mb-4">About Us</h1>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className=" bg-slate-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
            "Our mission is to revolutionize the agricultural sector by leveraging cutting-edge blockchain technology. We are committed to providing a decentralized platform that automates and secures agreements, simplifying transactions between farmers and buyers. At AgriMitra, we strive to enhance efficiency, and promote fair practices in agricultural trade. we aim to empower stakeholders and contribute to the overall growth and stability of the agricultural ecosystem."
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-slate-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
            we envision a future where the agricultural industry is characterized by transparency, trust, and sustainability. Our vision is to be a pioneering force in transforming the landscape of agricultural transactions, empowering farmers and buyers alike through innovative blockchain solutions. We aspire to create an ecosystem where every handshake in the agricultural agreements is backed by secure, smart contracts, fostering a prosperous and equitable agricultural community."
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-slate-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Our Values</h2>
            <p className="text-gray-600">
              Transparency:
                We value transparency as the cornerstone of our operations. We are committed to providing a clear and open platform where every agreement, transaction, and interaction is visible and traceable.
              Trust:
                Trust is the foundation of our relationships with farmers, buyers, and partners. We prioritize building and maintaining trust by ensuring the integrity and security of our blockchain-based solutions.
                We embrace innovation as a driving force behind our mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
