import React, { useEffect, useState } from 'react';
import ConsoTable from './ConsoTable';
import { GetMyHeaders } from '../pages/functions/getAPIToken';
const dbServerHostJava = "https://techsit.orobusinessgroup.online/site102" // MyServerHostJava()


function Conso() {
    let gAccessToken = sessionStorage.getItem("accessToken");
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    
    console.log('gAccessToken',gAccessToken);

    useEffect (() => {
        fetchData();
    }, []);



    // const getAPITokenJava = async () => {
    //     try {
    //         const response = await fetch('https://techsit.orobusinessgroup.online/site102/authenticate', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 username: 'Gerard',
    //                 password: 'password',
    //             }),
    //         });
    
    //         if (!response.ok) {
    //             throw new Error(`Failed to authenticate: ${response.status} ${response.statusText}`);
    //         }
            
    //         const data = await response.json();
    //         localStorage.setItem('jwtToken', data.token);
    //     } catch (error) {
    //         console.error('Authentication error:', error);
    //         throw new Error('Failed to authenticate.');
    //     }
    // };
    

    // const fetchData = async () => {
    //     try{
    //         //Call authentication function
    //         await getAPITokenJava();

    //         //Retrieve JWT token from local storage
    //         const jwtToken = localStorage.getItem('jwtToken');

    //         if (!jwtToken) {
    //             throw new Error('JWT token not found in local storage');
    //         }

    //         //Fetch data using JWT token
    //         const response = await fetch('https://techsit.orobusinessgroup.online/site102/api/j/report/conso/j19?from=02-01-2024&to=02-01-2024', {
    //             method: 'GET',

    //             headers: {
    //                 'Authorization': `Bearer ${jwtToken}`,
    //                 'Content-Type': 'application/json'
    //             }
    //         });

    //         if (!response.ok) {
    //             throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    //         }

    //         const data = await response.json();
    //         setItems(data);
    //     } catch (error) {
    //         console.error('Data fetching error:', error);
    //         setError('Failed to fetch data. Please try again later.');
    //     }
    // };

    const fetchData = async () => {
      let tBranch='j19';
      let dateFrom='02-28-2024';
      let dateTo='02-29-2024';
      let tWhere ="?from=" + dateFrom +"&to=" + dateTo
    //   api/j/report/conso/j19?from=02-01-2024&to=02-01-2024'
      try {
          await fetch( dbServerHostJava + "/api/j/report/conso/" + tBranch + tWhere, {                
          method: 'GET',
          headers: GetMyHeaders(gAccessToken),
          })
          .then((response) => response.json() )
          .then((json) => {
                
                // setDataTable(json.data);
              // setDataTable(testDat.data);
               if (Number(json.status) === 200) {
                console.log('data ', json.data)
                   setItems(json.data)
               } else {
                // toast.error("API Error in sales: "  + json.status +", " + (json.errors===undefined ? json.error :json.errors) );
                 alert("API Error in sales: "  + json.status +", " + (json.errors===undefined ? json.error :json.errors) );

               }
          })
      } catch (err) {
        //   toast.error("NO sales data to load,  " + err );
        alert("NO sales data to load,  " + err );
      }
      // console.log('sales data2 ', datTable)
    };



    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
    <div className='card conso-table overflow-auto'>
        <div className='card-body'>
            <h5 className='card-title'>
            </h5>
               
            <ConsoTable items={items} />

        </div>
    </div>
  )
}

export default Conso;
