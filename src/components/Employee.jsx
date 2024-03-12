import React, { useEffect, useState } from 'react'
import EmployeeList from './EmployeeList';


function Employee() {
    const [items, setItems] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/employeeList')
        .then((res) => res.json())
        .then((data) => {
            setItems(data);
        })
        .catch(e => console.log(e.message));
    };

    useEffect (() => {
        fetchData();
    }, []);

  return (
    <div className='card employee overflow-auto'>
        <div className='card-body'>
            <h5 className='card-title'>
                EMPLOYEE QUERIES
            </h5>
            <EmployeeList items={items}/>
        </div>
    </div>
  );
}

export default Employee
