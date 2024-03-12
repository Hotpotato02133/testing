import React, { useEffect, useState } from 'react';
import TestTable from './TestTable';

function Test1() {
  const [ userData, setUserData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelry');
        if (!response.ok){
          throw new Error('Network response was not okay');
        }
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error){
        console.error('Error fetching user data', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='card test1 overflow-auto'>
      <div className="card-body">
        <div className="card-title">
          TEST TABLE | Users
        </div>
        <TestTable userData={userData} />
      </div>
      
    </div>
  )
}

export default Test1
