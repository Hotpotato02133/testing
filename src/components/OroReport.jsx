
import React, { useEffect, useRef, useState } from 'react';
import './oroReport.css';
import OroReportTable from './OroReportTable';
import { GetMyHeaders } from '../pages/functions/getAPIToken';
import { decryptPWord, GetDepartmentList, MyServerHostJava } from '../pages/functions/MyFunctions';
import Pagination from './Pagination';
import BranchSelect from './BranchSelect';
import DateRangePicker from './DateRangePicker';

// const dbServerHostJava = "https://oroerp.net/erp";
let dbServerHostJava = MyServerHostJava();

function OroReport() {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [previewMode, setPreviewMode] = useState(false);
    // const [error, setError] = useState(null);
    const [selectedBranch, setSelectedBranch] = useState('J19');
    const optBranch = GetDepartmentList();

    // const [selectedDateFrom, setSelectedDateFrom] = useState('2024-02-27');
    // const [selectedDateTo, setSelectedDateTo] = useState('2024-02-29');
    const [selectedDateRange, setSelectedDateRange] =   useState({ from: '2024-02-27', to: '2024-02-29' });
    const itemsPerPage = 10;
    const componentRef = useRef();
    const gAccessToken = sessionStorage.getItem("accessToken");

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        setCurrentPage(1);
        fetchData();
    }, [selectedBranch, selectedDateRange]);

    const fetchData = async () => {
        let tBranch = [selectedBranch];
        let tWhere = `?from=${selectedDateRange.from}&to=${selectedDateRange.to}&_=${Math.random()}`;
        setItems([]);

        try {
            const response = await fetch(dbServerHostJava + "/api/j/report/conso/" + tBranch + tWhere, {
                method: 'GET',
                headers: GetMyHeaders(gAccessToken),
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (Number(json.status) === 200){
                setItems(json.data);
            } else {
                throw new Error("API Error in sales: " + json.status + ", " + (json.error));
            }
        } catch (err) {
            alert("Failed to fetch data: " + err.message + "\nPlease check input field, Date from and to!");
        }
    };

    const handleBranchChange = async (event) => {
        setSelectedBranch(event.target.value);
    };

    const handleDateRangeChange = (dateFrom, dateTo) => {
        setSelectedDateRange({ from: dateFrom, to: dateTo });
    };  

    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const handlePrint = () => {
        setPreviewMode(true);
        if (componentRef && componentRef.current) {
            const totalPagesToPrint = Math.ceil(items.length / itemsPerPage);

            const printPages = (page) => {
                if (page <= totalPagesToPrint) {
                    setCurrentPage(page);

                    setTimeout(() => {
                        componentRef.current.print();
                        printPages(page + 1);
                    }, 500); //Adjust delay as needed
                } else {
                    // Once all pages are printed, exit preview mode
                    setTimeout(() => {
                        setPreviewMode(false);
                    }, 1000);
                }
            };
            printPages(currentPage); //Start printing from the first page
        }
    };

    const renderTables = () => {
        const startIndex = (currentPage -1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;
        const currentItems = items.slice(startIndex, endIndex);

        const containerStyle = previewMode ? { width: '100%'} : {};

        return (
            <div className="table-container" style={containerStyle}>
                <OroReportTable items={currentItems}  ref={componentRef} handlePrint={handlePrint}/>
            </div>
        );
    };

    const getCurrentDateTime = () => {
        const currentDate = new Date();
        const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][currentDate.getDay()];
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const year = currentDate.getFullYear() % 100;
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const ampm = hours >=12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;

        return `${month}/${day}/${year}[${dayOfWeek}] ${formattedHours}:${minutes} ${ampm}`;
    }

    const currentDateAndTime = getCurrentDateTime();

    return (
        <div className="card oro-report pr-5 overflow-auto">
            <div className='card-body pb-2'>
                <br></br>
                {/* <h5 className='card-title'> 
                    JEWELRY{' '} <span style={{ float: 'right'}}>| Page{currentPage} of {totalPages} </span>
                </h5>
                <h5 className='card-title'>
                    CONSOLIDATED Report [Branch {selectedBranch}] <br />
                    Period: {selectedDateRange.from} to {selectedDateRange.to}
                    <span style={{ float: 'right'}}>{currentDateAndTime}</span>
                </h5> */}
                {/* <BranchSelect value={selectedBranch} onChange={handleBranchChange} /> */}
                <label style={{marginLeft: '0px', marginRight: '20px', paddingBottom: '5px'}} >Branch: </label>
                <select 
                    className='chrich-custom-select'
                    value={selectedBranch}
                    onChange={handleBranchChange}
                    // disabled={gAssignBranch ? true: false}
                >
                {optBranch.map(option => (
                    <option key={option.value} value={option.value}>
                    {option.text}
                    </option>
                ))}
                </select>

                <br></br>
                {/* <BranchSelect value={selectedBranch} onChange={handleBranchChange} /> */}
                <DateRangePicker onChange={handleDateRangeChange} />
                {renderTables()}
                <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
            </div>
        </div>
    );
}

export default OroReport;
