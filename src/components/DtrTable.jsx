import React, { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { TableContainer, Paper, IconButton, Toolbar, Tooltip, Typography, MenuItem } from '@mui/material';
// import PrintIcon from '@mui/icons-material/Print';

function DtrTable() {

  const columns = useMemo(
    () => [
      {
        accessorKey: 'date',
        header: 'Date',
        resizable: true,
      },
      {
        accessorKey: 'day',
        header: 'Day',
        resizable: true,
      },
      {
        accessorKey: 'timeIn',
        header: 'Time In',
        resizable: true,
      },
      {
        accessorKey: 'timeOut',
        header: 'Time Out',
        resizable: true,
      },
      {
        accessorKey: 'tardMin',
        header: 'Tardiness Min.',
        resizable: true,
      },
      {
        accessorKey: 'tardAmt',
        header: 'Tardiness Amt.',
        resizable: true,
      },
      {
        accessorKey: 'underMin',
        header: 'UnderTime Min',
        resizable: true,
      },
      {
        accessorKey: 'underAmt',
        header: 'UnderTime Amt',
        resizable: true,
      },
      {
        accessorKey: 'remarks',
        header: 'Remarks',
        resizable: true,
      }
    ],
    []
  );

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
  ]

  const table = useMaterialReactTable({
    columns,
    data: dtrData || [],
    enableColumnPinning: true,
    enableRowActions: false,
    draggingColumn: true,
    layoutMode: 'grid-no-grow', // constant column widths
    renderRowActionMenuItems: () => [<MenuItem key="action">Edit</MenuItem>, <MenuItem key="action">Remove</MenuItem>],
    initialState: {
      columnPinning: { left: [ 'empname'], right: [] }, // Pin 'Employee Name' column to the left
    },
  });

  // const CustomToolbar = () => (
  //   <Toolbar>
  //     <Typography>
  //       Print Payroll
  //     </Typography>
  //     <Tooltip title="Print">
  //       <IconButton onClick={() => window.print()}>
  //         <PrintIcon />
  //       </IconButton>
  //     </Tooltip>
  //   </Toolbar>
  // );

  return (
    <div>
      <h3>Christopher B. Singson</h3>
      <div className='d-flex justify-content-end mb-2'><small>03/16/24 - 03/31/24 = 15 Days</small></div>

      <h5>DTR</h5>
      <TableContainer component={Paper}>
        {/* <CustomToolbar /> */}
        <MaterialReactTable table={table} />
      </TableContainer>
    </div>
  );
}

export default DtrTable;
