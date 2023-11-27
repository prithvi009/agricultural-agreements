// src/ContactUs.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ContactUs = () => {

  return (
    <div className="container w-[100%] h-[100%] flex p-4 mt-5">

      <div className='mt-20 ml-[24rem] mx-auto w-fit'>
        <h1 className=" text-center text-[5rem] font-extrabold mb-4 text-blue-500">Contact Us</h1>
        <p className="mb-8 text-center">
          If you have any questions or concerns, please feel free to contact us using the form below.
        </p>
        <form className="w-full flex flex-col items-center gap-5">
          <div className=" w-4/6">
            
            <input
              className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className=" w-4/6">
            
            <input
              className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className=" w-4/6">
           
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
