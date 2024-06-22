import React, { useState } from 'react'
import OroBranchesChart from './OroBranchesChart';

function OroBranches() {
  return (
    <div className='card'>
        <div className='card-body pb-0'>
            <h5 className='card-title'>
                ORO Braches
            </h5>
            <OroBranchesChart />
        </div>
    </div>
  );
}

export default OroBranches
