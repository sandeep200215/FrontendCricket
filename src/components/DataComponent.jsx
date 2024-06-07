import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you're using Axios

const DataComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/match/allmatches'); // Replace with your API endpoint
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel any ongoing requests or timers when component unmounts
    return () => {};
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
    <h1 className='text-center mt-14 font-bold text-slate-500 text-2xl '>History Matches's Score</h1>
    <div className="  pt-4 m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
       
        <div  key={index} className="  bg-gray-200 rounded-md shadow-md  p-8  hover:border-b-green-500 border-b-red-500 border-b-8  ">
            <div className=' mt-2 border-b-gray-500 border-b-2'>
            <h2 className="text-sm-4 font-bold border-b-green-500">{item.teamHeading}</h2>
          <span className= '' > {item.matchNumberVenue}</span><br></br>
          </div>
         
          <div className='body mt-4'>
            <div className='flex justify-between px-2'>
          <p className='font-bold'> {item.battingTeam}</p>
          <p className='font-bold'> {item.battingTeamScore}</p>
            </div>
          </div> 
          <div className='flex justify-between px-2'>
            <p className='font-bold'>{item.bowlTeam}</p>
            <p className='font-bold'>{item.bowlTeamScore}</p>

          </div>
          
         
        <div className='footer mt-3'>
            <p className='text-green-500 '>{item.textComplete}</p>
            <p className='text-red-500'>{item.liveText}</p>
        </div>
       
        </div>
      ))}
    </div>
    </>
  );
};

export default DataComponent;
