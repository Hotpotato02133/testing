import React from 'react';
import ReactToPrint from 'react-to-print';
import './oroReportTable.css';

function OroReportTable({ items, handlePrint }) {
    if (!items || items.length === 0) {
        return null; // Don't render anything if there are no items to display
    }

    const formatNumberWithCommas = (number) => {
        if (number === null || number === undefined){
            return null;
        }
        return number.toLocaleString();
    };

    const computeTotalCashSales = () => {
        let totalCashSales = 0;
        for (let i = 0; i < items.length; i++) {
            totalCashSales += parseInt(items[i].cashSales);
        }
        return totalCashSales;
    }
    
    const computeTotalCashQty = () => {
        let totalCashQty = 0;
        for (let i = 0; i < items.length; i++) {
            totalCashQty += parseInt(items[i].cashQty);
        }
        return totalCashQty;
    }
    
    const computeTotalLaCash = () => {
        let totalLaCash = 0;
        for (let i = 0; i < items.length; i++) {
            totalLaCash += parseInt(items[i].laCash);
        }
        return totalLaCash;
    }
    
    const computeTotalLaQty = () => {
        let totalLaQty = 0;
        for (let i = 0; i < items.length; i++) {
            totalLaQty += parseInt(items[i].laQty);
        }
        return totalLaQty;
    }
    
    const computeTotalSales = () => {
        let totalSales = 0;
        for (let i = 0; i < items.length; i++) {
            totalSales += parseInt(items[i].totalSales);
        }
        return totalSales;
    }
    
    const computeTotalNetSales = () => {
        let totalNetSales = 0;
        for (let i = 0; i < items.length; i++) {
            totalNetSales += parseInt(items[i].netSales);
        }
        return totalNetSales;
    }
    
    const computeTotalPawnVal = () => {
        let totalPawnVal = 0;
        for (let i = 0; i < items.length; i++) {
            totalPawnVal += parseInt(items[i].pawnValue);
        }
        return totalPawnVal;
    }
    
    const computeTotalCommCode = () => {
        let totalCommCode = 0;
        for (let i = 0; i < items.length; i++) {
            totalCommCode += parseInt(items[i].commCode);
        }
        return totalCommCode;
    }
    

    return (
        <div>
            <div className='table-container' id='table-to-print'>
                <table style={{ cursor: 'pointer', width: 'auto', margin: 'auto ', alignItems: 'left'}} className='table table-borderless datatable'>
                    <thead className='table-light'>
                        <tr style={{ fontSize: '9.5px'}}>
                            <th style={{  borderLeft: '0.7px solid #313131', borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>Cashier</th>
                            <th style={{ borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>---CASH---</th>
                            <th style={{ borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>---LA--</th>
                            <th style={{ borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>---SUNDRIES---</th>
                            <th style={{ borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>---Total---</th>
                            <th style={{ borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>---LESS---</th>
                            <th style={{ borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>Over/</th>
                            <th style={{ borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>Less</th>
                            <th style={{ borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'></th>
                            <th style={{  borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>---ADD---</th>
                            <th style={{  borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>---LESS---</th>
                            <th style={{  borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>---LA---</th>
                            <th style={{ borderTop: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>Pawn&nbsp;Val</th>
                            <th style={{ borderTop: '0.7px solid #313131', borderRight: '0.7px solid #313131', textAlign: 'center'}} scope='col'></th>
                        </tr>
                        <tr style={{ fontSize: '9.5px'}}>
                            <th style={{ textAlign: "left", borderBottom: '0.7px solid #313131', borderLeft: '0.7px solid #313131', borderTop: 'none', borderRight: '0.7px dashed #313131'}} scope='col'>&nbsp;&nbsp;&nbsp;&nbsp;Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Day</th>
                            <th style={{ borderBottom: '0.7px solid #313131',  borderRight: '0.7px dashed #313131'}} scope='col'>Sales Misc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qty</th>
                            <th style={{ borderBottom: '0.7px solid #313131',  borderRight: '0.7px dashed #313131'}} scope='col'>Sales Misc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cash&nbsp;&nbsp;&nbsp;Qty</th>
                            <th style={{ borderBottom: '0.7px solid #313131', borderRight: '0.7px dashed #313131'}} scope='col'>Sales&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remarks</th>
                            <th style={{ borderBottom: '0.7px solid #313131', borderRight: '0.7px dashed #313131'}} scope='col'>Sales&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cash</th>
                            <th style={{ borderBottom: '0.7px solid #313131', borderRight: '0.7px dashed #313131'}} scope='col'>Cash&nbsp;W/d&nbsp;&nbsp;&nbsp;Cr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Card/Ret</th>
                            <th style={{ borderBottom: '0.7px solid #313131', borderRight: '0.7px dashed #313131'}} scope='col'>Short</th>
                            <th style={{ borderBottom: '0.7px solid #313131', borderRight: '0.7px dashed #313131', textAlign: 'center'}} scope='col'>Can&nbsp;LA</th>
                            <th style={{ borderBottom: '0.7px solid #313131', borderRight: '0.7px dashed #313131'}} scope='col'>Net&nbsp;&nbsp;Sales</th>
                            <th style={{ borderBottom: '0.7px solid #313131', borderRight: '0.7px dashed #313131'}} scope='col'>Dsply&nbsp;&nbsp;&nbsp;&nbsp;LA</th>
                            <th style={{ borderBottom: '0.7px solid #313131', borderRight: '0.7px dashed #313131'}} scope='col'>Cash&nbsp;&nbsp;&nbsp;&nbsp;LA&nbsp;&nbsp;W/d&nbsp;&nbsp;&nbsp;Amount</th>
                            <th style={{ borderBottom: '0.7px solid #313131', borderRight: '0.7px dashed #313131'}} scope='col'>Add&nbsp;&nbsp;&nbsp;&nbsp;(FP)&nbsp;&nbsp;&nbsp;(Cncl)&nbsp;&nbsp;&nbsp;End&nbsp;Inv</th>
                            <th style={{ borderBottom: '0.7px solid #313131', borderRight: '0.7px dashed #313131'}} scope='col'>[Cash+LA]</th>
                            <th style={{ borderBottom: '0.7px solid #313131', borderRight: '0.7px solid #313131'}} scope='col'>Comm.&nbsp;(Code)</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: 'left', fontSize: '9.5px'}}>
                        {items &&
                        items.length > 0 &&
                        (() => {
                            const rows = [];
                            for (let i = 0; i < items.length; i++) {
                                const item = items[i];
                                rows.push(
                                    <tr key={item.cashier} style={{ fontWeight: 'bold'}}>
                                        <th scope='row' style={{ whiteSpace: 'nowrap' }}>
                                            {item.cashier}<br />
                                            {item.reportDate}&nbsp;{item.dayOfWeek}
                                        </th>
                                        <td style={{ paddingTop: '25px', paddingBottom: '0px'}}>{formatNumberWithCommas(item.cashSales)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.cashQty)}</td>
                                        <td style={{ paddingTop: '25px', paddingBottom: '0px' }}>{formatNumberWithCommas(item.laSales)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.laCash)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.laQty}</td>
                                        <td style={{ paddingTop: '25px', paddingBottom: '0px' }}>&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.sundries)}&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.sundriesRemarks)}</td>
                                        <td style={{ paddingTop: '25px', paddingBottom: '0px' }} >{formatNumberWithCommas(item.totalSales)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.totalCash)}</td>
                                        <td style={{ paddingTop: '25px', paddingBottom: '0px', textAlign: 'center'}}>{formatNumberWithCommas(item.lessWdCash)}&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.lessWdCard)}&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.lessWdRet)}</td>
                                        <td style={{ paddingTop: '25px', paddingBottom: '0px', textAlign: 'center'}}>{formatNumberWithCommas(item.overShort)}</td>
                                        <td style={{ paddingTop: '25px', paddingBottom: '0px', textAlign: 'center'}}>{formatNumberWithCommas(item.lessLaCan)}</td>
                                        <td style={{ paddingTop: '25px', paddingBottom: '0px', textAlign: "center"}}>{formatNumberWithCommas(item.netSales)}</td>
                                        <td style={{ paddingTop: '25px', paddingBottom: '0px'}}>&nbsp;&nbsp;{formatNumberWithCommas(item.aDsply)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.lessLa)}</td>
                                        <td style={{ paddingTop: '25px', paddingBottom: '0px'}}>&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.lessCash)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.lessLa)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.lessWd)}</td>
                                        <td style={{ paddingTop: '25px', paddingBottom: '0px'}}>{formatNumberWithCommas(item.LessStockTransfer)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.laAdd)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.laLessFP)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.laLessCancel)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(item.laEndInv)}</td>
                                        <td style={{ textAlign: "center", paddingTop: '25px', paddingBottom: '0px'}}>{formatNumberWithCommas(item.pawnValue)}</td>
                                        <td style={{ textAlign: 'center', paddingTop: '25px', paddingBottom: '0px'}}>{formatNumberWithCommas(item.commCode)}</td>
                                    </tr>
                                );
                            }
                            return rows;
                        })()}
                    </tbody>
                    <tfoot style={{ borderTop: "0.7px solid #313131"}}>
                        {items &&
                        items.length > 0 && (
                            <tr style={{ fontSize: '10px', fontWeight: 'bold'}}>
                                <th scope="row">Jewelry</th>
                                <td>{formatNumberWithCommas(computeTotalCashSales())}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(computeTotalCashQty())}</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(computeTotalLaCash())}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatNumberWithCommas(computeTotalLaQty())}</td>
                                <td>Total&nbsp;Sales&#x27A3;&#x27A3;&#x27A3;</td>
                                <td>{formatNumberWithCommas(computeTotalSales())}</td>
                                <td></td>   
                                <td></td>
                                <td style={{ textAlign: "center"}}>Total&nbsp;Net&nbsp;Sales&#x27A3;&#x27A3;</td>
                                <td style={{ textAlign: "center"}}>{formatNumberWithCommas(computeTotalNetSales())}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{ textAlign: 'center' }}>{formatNumberWithCommas(computeTotalPawnVal())}</td>
                                <td style={{ textAlign: 'center' }}>{formatNumberWithCommas(computeTotalCommCode())}</td>
                            </tr>
                        )}
                    </tfoot>
                </table>
            </div>
            <div className='row mt-3'>
                <div className='col-md-12 d-flex justify-content-end'>
                    <ReactToPrint
                    trigger={() => <button className='print-button' style={{ float: 'right', backgroundColor: '#198754', border: 'none', color: 'white', padding: '8px 18px', textAlign: 'right', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer', borderRadius: '0.3rem'}}
                    onClick={handlePrint}>Print</button>}
                    content={() => document.getElementById('table-to-print')}
                    />
                </div>
            </div>
        </div>
    );
}

export default OroReportTable;
