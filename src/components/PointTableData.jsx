import { useState,useEffect } from "react"
import axios from "axios";
const PointTableData=()=>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
   var heading=[];
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('cricketinformer-production.up.railway.app/point-table'); // Replace with your API endpoint
          setData(response.data);
          console.log(response.data)
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
      <div className="table-contaier overflow-x-auto px-6">
        <h1 className="text-2xl font-bold text-gray-800 px-2 mt-14 text-center">Point Table</h1>
        <table class=" mt-4 table-auto w-full">
    <thead className='mx-4'>
      {/* <tr class="bg-gray-200">
        {data[0].map((team,index)=>(
        <th className="px-4 py-2"> {team}</th>
        ))}
        
        
      
      </tr> */}
    </thead>
    <tbody>
      
      { data.map((fetch,index)=>(
            
         <tr class=" text-center hover:bg-slate-400 bg-slate-100">
           { fetch.map((dataItem,index)=> (
              
              <td className="px-4 py-2 " >{ dataItem}</td>
            ))}
        </tr>
      ))}
    </tbody>
  </table>
      </div>
      
      </>
    );

}
export default PointTableData;