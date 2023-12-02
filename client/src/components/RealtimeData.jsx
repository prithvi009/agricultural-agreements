import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './styles.css'; // Import your CSS file

const RealtimeData = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd0000017704f08e67e4414747189afb9ef2d662&format=json&offset=0&limit=4000');
        setResponseData(response.data.records);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='realtime-data-container p-4 bg-gray-100 rounded-md my-4'>
      <h1 className='text-2xl font-bold mt-11 mb-4'>Real-Time Commodity Prices:</h1>
      {loading ? (
        <p className='text-gray-600'>Loading...</p>
      ) : error ? (
        <p className='text-red-500'>{error}</p>
      ) : (
        <div>
          <ul className='flex gap-2 flex-wrap'>
            {responseData.slice(0,204).map((record) => (
              <li key={record.id} className='bg-white p-2 mb-2 rounded-md flex flex-col' >
                <p className='text-base font-semibold'>{record.commodity}</p>
                <p className='text-sm text-gray-600'>{record.state}</p>
                <p className='text-sm text-gray-600'>{`Min Price - Rs. ${record.min_price}`}</p>
                <p className='text-sm text-gray-600'>{`Max Price - Rs. ${record.max_price}`}</p>
                <p className='text-sm text-gray-600'>{`Modal Price - Rs. ${record.modal_price}`}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RealtimeData;
