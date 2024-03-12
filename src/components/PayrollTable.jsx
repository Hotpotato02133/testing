import React, { useMemo } from 'react';
import { TableContainer, Paper, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { MenuItem } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';

function PayrollTable({payrollData}) {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'empname',
        header: 'Employee Name',
      },
      {
        accessorKey: 'Branch',
        header: 'Branch',
      },
      {
        accessorKey: 'Position',
        header: 'Position',
      },
      {
        accessorKey: 'SalaryRate',
        header: 'Salary Rate',
      },
      {
        accessorKey: 'PayPeriod',
        header: 'Pay Period',
      },
      {
        accessorKey: 'Otime',
        header: 'Overtime',
      },
      {
        accessorKey: 'OAdd',
        header: 'O Add',
      },
      {
        accessorKey: 'ORemarks',
        header: 'O Remarks',
      },
      {
        accessorKey: 'PayGross',
        header: 'Pay Gross',
      },
      {
        accessorKey: 'Absent',
        header: 'Absent',
      },
      {
        accessorKey: 'AbsAmount',
        header: 'Abs Amount',
      },
      {
        accessorKey: 'Utime',
        header: 'Undertime',
      },
      {
        accessorKey: 'Late',
        header: 'Late',
      },
      {
        accessorKey: 'LateMin',
        header: 'Late Min',
      },
      {
        accessorKey: 'Doff',
        header: 'Dayoff',
      },
      {
        accessorKey: 'Uniform',
        header: 'Uniform',
      },
      {
        accessorKey: 'bonding',
        header: 'Bonding',
      },
      {
        accessorKey: 'Charges',
        header: 'Charges',
      },
      {
        accessorKey: 'DailyCharges',
        header: 'Daily Charges',
      },
      {
        accessorKey: 'SSS',
        header: 'SSS',
      },
      {
        accessorKey: 'Pagibig',
        header: 'Pagibig',
      },
      {
        accessorKey: 'Less',
        header: 'Less',
      },
      {
        accessorKey: 'Remarks',
        header: 'Remarks',
      },
      {
        accessorKey: 'TotalDed',
        header: 'TotalDed',
      },
      {
        accessorKey: 'Net',
        header: 'Net',
      },
      {
        accessorKey: 'cutoff',
        header: 'cutoff',
      },
      {
        accessorKey: 'empno',
        header: 'Emp no.',
      },
      {
        accessorKey: 'SSSLoan',
        header: 'SSS Loan',
      },
      {
        accessorKey: 'PagIBIGLoan',
        header: 'Pagibig Loan',
      },
      {
        accessorKey: 'Final',
        header: 'Final',
      },
      {
        accessorKey: 'fromDate',
        header: 'From Date',
      },
      {
        accessorKey: 'toDate',
        header: 'To Date',
      },
      {
        accessorKey: 'acctno',
        header: 'Acct no.',
      },
      {
        accessorKey: 'OnHold',
        header: 'On Hold',
      },
      {
        accessorKey: 'updaterec',
        header: 'Update Rec',
      },
      {
        accessorKey: 'Incentive',
        header: 'Incentive',
      },
      {
        accessorKey: 'autonum',
        header: 'Auto num',
      },
      {
        accessorKey: 'Salreleased',
        header: 'Sal released',
      },
      {
        accessorKey: 'branchno',
        header: 'Branch no.',
      },
      {
        accessorKey: 'DayReleased',
        header: 'Day Released',
      },
      {
        accessorKey: 'autoupdateCharges',
        header: 'updated Charges',
      },
      {
        accessorKey: 'processdate',
        header: 'Process Date',
      },
      {
        accessorKey: 'TraineeDays',
        header: 'Trainee Days',
      },
      {
        accessorKey: 'DTRBranch',
        header: 'DTR',
      },
      {
        accessorKey: 'doffNum',
        header: 'Dayoff no.',
      },
      {
        accessorKey: 'utimemin',
        header: 'Utime min',
      },
      {
        accessorKey: 'beyond30',
        header: 'Beyond 30',
      },
      {
        accessorKey: 'finalby',
        header: 'Final By',
      },
      {
        accessorKey: 'finaldate',
        header: 'Final Date',
      },
      {
        accessorKey: 'leaveDays',
        header: 'Leave Days',
      },
      {
        accessorKey: 'LeaveAmount',
        header: 'Leave Amount',
      },
      {
        accessorKey: 'Selected',
        header: 'Selected',
      },
      {
        accessorKey: 'TagDayOne',
        header: 'Tag',
      },
      {
        accessorKey: 'LoanAmt',
        header: 'Loan Amount',
      },
      {
        accessorKey: 'Interest',
        header: 'Interest',
      },
      {
        accessorKey: 'EmpIncentive',
        header: 'Incentive',
      },
      {
        accessorKey: 'AgencyName',
        header: 'Agency',
      },
      {
        accessorKey: 'Referral',
        header: 'Referral',
      },
      {
        accessorKey: 'NewEmp',
        header: 'New Emp.',
      },
      {
        accessorKey: 'Penalty',
        header: 'Penalty',
      },
      {
        accessorKey: 'source_group',
        header: 'Group',
      },
      {
        accessorKey: 'net2',
        header: 'Net',
      },
      {
        accessorKey: 'lh_amt',
        header: 'Lh amt',
      },
      {
        accessorKey: 'sh_amt',
        header: 'Sh amt',
      },
      {
        accessorKey: 'holiday_hours',
        header: 'Holiday hours',
      },
      {
        accessorKey: 'phil_health',
        header: 'PhilHealth',
      },
      // Add more column definitions as needed
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: payrollData || [],
    enableColumnPinning: true,
    enableRowActions: false,
    layoutMode: 'grid-no-grow', // constant column widths
    renderRowActionMenuItems: () => [<MenuItem key="action">Edit</MenuItem>, <MenuItem key="action">Remove</MenuItem>],
    initialState: {
      columnPinning: { left: [ 'empname'], right: [] }, // Pin 'Employee Name' column to the left
    },
  });

  const CustomToolbar = () => (
    <Toolbar>
      <Typography>
        Print Payroll
      </Typography>
      <Tooltip title="Print">
        <IconButton onClick={() => window.print()}>
          <PrintIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );

  return (
    <div>
      <h3>PAYROLL</h3>
      <TableContainer component={Paper}>
        <CustomToolbar />
        <MaterialReactTable table={table} />
      </TableContainer>
    </div>
  );
}

export default PayrollTable;
