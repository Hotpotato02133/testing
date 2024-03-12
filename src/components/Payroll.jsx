import React, { useState, useEffect } from 'react'
import PayrollTable from './PayrollTable';


function Payroll() {
    const [payrollData, setPayrollData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://us-central1-oro-business-group.cloudfunctions.net/app/payrollList/getPayrollList?fbclid=IwAR24iQpkKmA3BuD2FTEbk2XbwPooT31HH8SEy_f_vTVEV5vG8nsUC7VhTrQ');
          const data = await response.json();
          setPayrollData(data.data); // Set only the 'data' array from the response
        } catch (error) {
          console.error('Error fetching payroll data:', error);
        }
      };
  
      fetchData();
    }, []); 

  return (
    <div className='card payroll-table overflow-auto'>
        <div className='card-body'>
            <h5 className='card-title'>
                Payroll
            </h5>
            <PayrollTable payrollData={payrollData} />
        </div>
    </div>
  )
}

export default Payroll;
