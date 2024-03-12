import React from 'react'
import PayslipCard from './PayslipCard';

function Payslip() {

  return (
    <div className='card payslip-1 overflow-auto'>

        <div className='card-body'>
            <PayslipCard />
        </div>
    </div>
  )
}

export default Payslip;
