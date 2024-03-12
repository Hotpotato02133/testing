import React, { useState } from 'react'
import CardFilter from './CardFilter';
import OroBranchesChart from './OroBranchesChart';

function OroBranches() {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

  return (
    <div className='card'>
        <CardFilter filterChange={handleFilterChange} />
        <div className='card-body pb-0'>
            <h5 className='card-title'>
                ORO Braches<span>| {filter}</span>
            </h5>
            <OroBranchesChart />
        </div>
    </div>
  );
}

export default OroBranches
