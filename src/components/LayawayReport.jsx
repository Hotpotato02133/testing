import React from 'react'
import DateRangePicker from './DateRangePicker';

function LayawayReport() {
    const layawayData = [
        {
            "id": 1,
            "name": "Product A",
            "price": 20.00,
            "category": "Electronics"
        },
        {
            "id": 2,
            "name": "Product B",
            "price": 30.00,
            "category": "Clothing"
        },
        {
            "id": 3,
            "name": "Product C",
            "price": 40.00,
            "category": "Home & Kitchen"
        },
        {
            "id": 4,
            "name": "Product D",
            "price": 50.00,
            "category": "RTW"
        }
    ]

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
                    }, 500);
                } else {
                    setTimeout(() => {
                        setPreviewMode(false);
                    }, 1000);
                }
            };
            printPages(currentPage);
        }
    };

    const rendertables = () => {
        const stateIndex = (currentPage -1) * itemsPerPage;
        const endIndex = currentPage * itemsPerPage;
        const currentItems = items.slice(startIndex, endIndex);

        const containerStyle = previewMode ? { width: '100%'} : {};

        return (
            <div className='table-container' style={containerStyle}>
                <LayawayReportTable items={currentItems} ref={componentRef} handlePrint={handlePrint} />
            </div>
        );
    };

  return (
    <div className='oro layaway-report pr-5 overflow-auto'>
        <div className='card-body pb-2'>
            <br></br>
            <h5 className='card-title'>
                JEWELRY{' '} <span style={{ float: 'right' }}> | Page{currentPage} of {totalPages} </span>
            </h5>

            <h5 className='card-title'>
                CONSOLIDATED Report [Branch {selectedBranch}] <br />
                Period: {selectedDateRange.from} to {selectedDateRange.to}
                <span style={{ float: 'right'}}>{currentDateAndTime}</span>
            </h5>

            <label style={{ marginLeft: '0px', marginRight: '20px', paddingBottom: '5px'}}>Branch: </label>
            <select
                className='chrich-custom-select'
                value={selectedBranch}
                onChange={handleBranchChange}
            >
                {optBranch.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>

            <br></br>
            <DateRangePicker onChange={handleDateRangeChange} />
            {rendertables()}
            <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
        </div>
    </div>
  );
}

export default LayawayReport
