import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const dtrData = [
    {
        date: "03/16/24",
        day: "SAT",
        timeIn: "07:56 AM",
        timeOut: "11:06 AM",
        tardMin: "0",
        tardAmt: "0",
        underMin: "0",
        underAmt: "0",
        remarks: "present",
    },
    {
        date: "03/17/24",
        day: "SUN",
        timeIn: "07:56 AM",
        timeOut: "11:06 AM",
        tardMin: "0",
        tardAmt: "0",
        underMin: "0",
        underAmt: "0",
        remarks: "day-off",
    },
    {
        date: "03/18/24",
        day: "MON",
        timeIn: "07:56 AM",
        timeOut: "11:06 AM",
        tardMin: "0",
        tardAmt: "0",
        underMin: "0",
        underAmt: "0",
        remarks: "present",
    },
    {
        date: "03/19/24",
        day: "TUE",
        timeIn: "07:56 AM",
        timeOut: "11:06 AM",
        tardMin: "0",
        tardAmt: "0",
        underMin: "0",
        underAmt: "0",
        remarks: "present",
    },
    {
        date: "03/20/24",
        day: "WED",
        timeIn: "07:56 AM",
        timeOut: "11:06 AM",
        tardMin: "0",
        tardAmt: "0",
        underMin: "0",
        underAmt: "0",
        remarks: "day-off",
    },
];

function Dtr1Table() {

  return (
      <TableContainer component={Paper}>
        <h3>&nbsp;&nbsp;&nbsp;Christopher B. Singson</h3>
        <h5>&nbsp;&nbsp;&nbsp;&nbsp;DTR</h5>
        <div className='d-flex justify-content-end mb-2 mr-4'><small className='d-flex justify-content-end mb-2'>03/16/24 - 03/31/24 = 15 Days</small></div>
        <Table sx={{ minWidth: 650, tableLayout: 'fixed' }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell style={{ whiteSpace: 'nowrap'}}>Date</TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap'}}>Day</TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap'}}>Time In</TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap'}}>Time Out</TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap'}}>Tard Min</TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap'}}>Tard Amt</TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap'}}>Under Min</TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap'}}>Under Amt</TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap'}}>Remarks</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {dtrData.map((row) => (
                    <TableRow key={row.date}>
                        <TableCell style={{ whiteSpace: 'nowrap'}}>{row.date}</TableCell>
                        <TableCell style={{ whiteSpace: 'nowrap'}}>{row.day}</TableCell>
                        <TableCell style={{ whiteSpace: 'nowrap'}}>{row.timeIn}</TableCell>
                        <TableCell style={{ whiteSpace: 'nowrap'}}>{row.timeOut}</TableCell>
                        <TableCell style={{ whiteSpace: 'nowrap'}}>{row.tardMin}</TableCell>
                        <TableCell style={{ whiteSpace: 'nowrap'}}>{row.tardAmt}</TableCell>
                        <TableCell style={{ whiteSpace: 'nowrap'}}>{row.underMin}</TableCell>
                        <TableCell style={{ whiteSpace: 'nowrap'}}>{row.underAmt}</TableCell>
                        <TableCell style={{ whiteSpace: 'nowrap'}}>{row.remarks}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </TableContainer>
  );
};

export default Dtr1Table;
