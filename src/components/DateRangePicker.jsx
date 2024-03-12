import React, { useState } from 'react'
import './DateRangePicker.css'

const DateRangePicker = ({ onChange }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
        if (endDate && event.target.value > endDate) {
            setEndDate('');
        }
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
        if (startDate && event.target.value < startDate) {
            setStartDate('');
        }
    };

    const handleApply = () => {
        if (startDate && endDate){
            onChange(startDate, endDate);
        }
    }

  return (
    <div className='date-range-picker'>
        <input
            type='date'
            value={startDate}
            onChange={handleStartDateChange}
            placeholder='Start Date'
        />
        <input
            type='date'
            value={endDate}
            onChange={handleEndDateChange}
            placeholder='End Date'
        />
        <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default DateRangePicker
