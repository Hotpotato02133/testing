import React from 'react'
import ReactToPrint from 'react-to-print'

function OroReportTable1({items, handlePrint}) {
    const formatNumberWithCommas = (number) => {
        if (number === null || number === undefined){
            return null;
        }
        return number.toLocaleString();
    };

  return (
    <div>
        <div className='container' id='table-to-print'>
            <table style={{ width: 'auto', margin: 'auto'}} className='table table-borderless datatable'>
                <thead className='table-light'>
                    <tr style={{ textAlign: 'center'}}>
                        <th scope='col'>Cashier</th>
                        <th scope='col'>---LA---</th>
                        <th scope='col'>---SUNDRIES---</th>
                        <th scope='col'>---TOTAL---</th>
                        <th scope='col'>---Less---</th>
                        <th scope='col'>Over/</th>
                        <th scope='col'>Less</th>
                        <th></th>
                        <th scope='col'>--ADD--</th>
                        <th scope='col'>---LESS---</th>
                        <th scope='col'>---LA---</th>
                        <th scope='col'>PawnVal</th>
                        <th></th>
                        <th scope='col'>---Cash---</th>
                    </tr>
                    <tr>
                        <th scope='col'>Date Day</th>
                        <th scope='col'>SalesMisc Qty</th>
                        <th scope='col'>SalesMisc Cash Qty</th>
                        <th scope='col'>Sales Remarks</th>
                        <th scope='col'>Sales Cash</th>
                        <th scope='col'>CashW/d Cr Card/Ret</th>
                        <th scope='col'>Short</th>
                        <th scope='col'>CanLA</th>
                        <th scope='col'>NetSales</th>
                        <th scope='col'>Dsply LA</th>
                        <th scope='col'>Cash LA W/d Amount</th>
                        <th scope='col'>Add (FP) (Cncl) EndInv</th>
                        <th scope='col'>[Cash+LA]</th>
                        <th scope='col'>Comm. (Code)</th>
                    </tr>
                </thead>
                <tbody>
                    {items &&
                    items.length > 0 &&
                    items.map(item => (
                        <tr>
                            <th>{item.cashier}{item.reportDate}{item.dayOfWeek}</th>
                            <td>{item.cashSales}{item.cashQty}</td>
                            <td>{item.laSales}{item.laCash}{item.laQty}</td>
                            <td>{item.sundries}{item.sundriesRemarks}</td>
                            <td>{item.totalSales}{item.totalCash}</td>
                            <td>{formatNumberWithCommas(item.lessWdCash)}{formatNumberWithCommas(item.lessWdCard)}{item.lessWdRet}</td>
                            <td>{formatNumberWithCommas(item.overShort)}</td>
                            <td>{item.lessLaCan}</td>
                            <td>{formatNumberWithCommas(item.netSales)}</td>
                            <td>{item.aDsply}{item.aLa}</td>
                            <td>{item.lessCash}{item.lessLA}{item.lessWd}</td>
                            <td>{item.LessStockTransfer}{item.laAdd}{item.laLessFP}{item.laLessCancel}{item.laEndInv}</td>
                            <td>{item.pawnValue}</td>
                            <td>{formatNumberWithCommas(item.commCode)}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    {items &&
                    items.length > 0 && (
                        <tr>
                            <th scope='row'></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    )}
                </tfoot>
            </table>
        </div>
        <ReactToPrint
            trigger={() => <button style={{ float: 'right', backgroundColor: '#0d6efd', border: 'none', color: 'white', padding: '8px 18px', textAlign: 'right', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer', borderRadius: '0.3rem'}}
            onClick={handlePrint}>Print</button>}
            content={() => document.getElementById('table-to-print')}
        />
    </div>
  );
}

export default OroReportTable1
