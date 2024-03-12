import React, { useEffect, useState } from 'react';
import TestTable from './TestTable';

function Test1() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.org/users');
        if (!response.ok) {
          throw new Error('Network response was not okay');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='card test1 overflow-auto'>
        <div className='card-body'>
            <h5 className='card-title'>
                Test Table
            </h5>
            <TestTable userData={userData} />
        </div>
    </div>
  );
}

export default Test1;
