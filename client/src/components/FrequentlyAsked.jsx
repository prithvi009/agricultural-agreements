import React from 'react'
import { useState } from 'react';


const FrequentlyAsked = () => {
    const faqs = [
        { question: 'How can I initiate a new agricultural agreement?', answer: 'To start new agricultural agreement,Login using your credentials -> click on the button "Create New Contract" -> Fill out the details -> Click on Create' },
        { question: 'What information is required to create an agricultural agreement?', answer: 'You\'ll need essential details such as farmer and buyer names, crop type, quantity, price per unit, payment method, delivery date, contract period, and any specific terms and conditions.' },
        { question: 'Is my personal information secure on your platform?', answer: 'Absolutely. We prioritize the security and confidentiality of your data. Our platform employs robust encryption measures, and we adhere to strict privacy policies.' },
        { question: 'Can I customize terms and conditions in the agreement?', answer: 'Yes, our platform allows you to tailor terms and conditions based on your specific needs. During the agreement creation process, you\'ll have the option to include any additional terms.' },
      ];
    
      const [expandedIndex, setExpandedIndex] = useState(null);
    
      const handleQuestionClick = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
      };
    
      return (
        <div className='md:w-4/5 px-2 mx-auto mb-10'>
          <h2 className='text-[3rem] text-blue-600 text-center pb-6'>Frequently Asked Questions</h2>
          <div className='flex flex-col gap-2'>
          {faqs.map((faq, index) => (
            <div key={index} className='cursor-pointer border text-lg w-auto h-auto p-5 flex  items-center' onClick={() => handleQuestionClick(index)} >
                <div className='flex flex-col gap-2'>
                <strong>{faq.question}</strong>
                {expandedIndex === index && <p>{faq.answer}</p>}
                </div>
              
            </div>
          ))}
          </div>
          
        </div>
      );
}

export default FrequentlyAsked
