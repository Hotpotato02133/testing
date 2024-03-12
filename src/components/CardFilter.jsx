import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function CardFilter({ filterChange }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);

        if(date instanceof Date && !isNaN(date.getTime())) {
            const formattedDate = date.toISOString();
            filterChange(formattedDate);
        } else {
            filterChange(null);
        }
    };

    const handleClearDate = () => {
        setSelectedDate(null);
        filterChange(null);
    };

  return (
    <div className="filter">
        <a className='icon' href='#' data-bs-toggle="dropdown">
            <i className='bi bi-three-dots'></i>
        </a>
        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow'>
            <li className='dropdown-header text-start'>
                <h6>Filter</h6>
            </li> 
            <li>
                <a className='dropdown-item' onClick={() => filterChange('Today')}>
                    Today
                </a>
            </li>
            <li>
                <a className='dropdown-item' onClick={() => filterChange('This week')}>
                    This Week
                </a>
            </li>
            <li>
                <a
                    className='dropdown-item'
                    onClick={() => filterChange('This Month')}
                >
                    This Month
                </a>
            </li>
            <li>
                <a
                    className='dropdown-item'
                    onClick={() => filterChange('This Year')}
                >
                    This Year
                </a>
            </li>
            <li>
                <div className='dropdown-item'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                label="Select Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                clearable
                                onClear={handleClearDate}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </li>
        </ul>
    </div>
  );
}

export default CardFilter
