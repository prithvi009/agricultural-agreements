// src/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto mt-[150px] p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">About Us</h1>
        <p className="text-gray-600 mb-8">
          Welcome to our company! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget viverra nulla sem
          vitae neque.
        </p>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in
              malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in
              malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Our Values</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in
              malesuada aliquam, est erat faucibus purus, eget viverra nulla sem vitae neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
