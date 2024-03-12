import React, { useEffect, useState } from 'react';
import './card.css';
import CardFilter from './CardFilter';

function Card({ card }) {
  const [filter, setFilter] = useState('Today');
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      // Handle the selected date here, e.g., format it or perform any specific actions
    }
  }, [selectedDate]);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);

    // Additional logic related to filter changes can be added here
  };

  return (
    <div className="col-xxl-4 col-md-6">
      <div className='card info-card justify-content-center sales-card'>
        <CardFilter filterChange={handleFilterChange} setSelectedDate={setSelectedDate} />
        <div className='card-body'>
          <h5 className='card-title'>
            {card.name} <span>| {filter}</span>
          </h5>

          <div className='d-flex align-items-center'>
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className={card.icon}></i>
            </div>
            <div className='ps-3'>
              <h6>
                {card.name === 'Revenue'
                  ? 'P' + card.amount.toLocaleString('en-PH')
                  : card.amount.toLocaleString('es-PH')}
              </h6>
              <span className={`${
                card.percentage > 0 ? 'text-success' : 'text-danger'
              } small pt-1 fw-bold`}
              >
                {card.percentage > 0
                  ? card.percentage * 100
                  : -card.percentage * 100}
                %
              </span>
              <span className='text-muted small pt-2 ps-1'>
                {card.percentage > 0 ? 'increase' : 'decrease'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
