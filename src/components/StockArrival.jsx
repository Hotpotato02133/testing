import React from 'react'
import StockArrivalChart from './StockArrivalChart';


function StockArrival() {
  return (
    <div className='card'>
        <div className='card-body'>
            <h5 className='card-title'>
                Echarts Getting Started Example
            </h5>
            <StockArrivalChart />
        </div>
    </div>
  );
}

export default StockArrival;
