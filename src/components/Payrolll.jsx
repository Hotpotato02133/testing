import React, {useEffect, useState, useMemo} from 'react';
import { TableContainer, Paper } from '@mui/material';
import { MaterialReactTable, useMaterialReactTable  } from 'material-react-table';
import { MenuItem } from '@mui/material';

function Payrolll() {
    const [payrollData, setPayrollData] = useState([]);

    // Fetch JWT
    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await fetch('https://us-central1-oro-business-group.cloudfunctions.net/app/payrollList/getPayrollList?fbclid=IwAR24iQpkKmA3BuD2FTEbk2XbwPooT31HH8SEy_f_vTVEV5vG8nsUC7VhTrQ');
                const { token } = await response.json();
                fetchData(token);
            } catch (error) {
                console.error('Error fetching JWT:', error);
            }
        };

        fetchToken();
    }, []);

    //FETCH data using JWT
    const fetchData = async (token) => {
        try {
            const response = await fetch('https://us-central1-oro-business-group.cloudfunctions.net/app/payrollList/getPayrollList?fbclid=IwAR24iQpkKmA3BuD2FTEbk2XbwPooT31HH8SEy_f_vTVEV5vG8nsUC7VhTrQ', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = await response.json();
            setPayrollData(data.data);
        } catch (error) {
            console.error('Error fetching payroll data:', error);
        }
    };

    const columns = useMemo (
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
        ],
        []
    );

    const table = useMaterialReactTable({
        columns,
        data: payrollData,
        enableColumnPinning: true,
        enableRowActions: true,
        layoutMode: 'grid-no-grow',
        renderRowActionMenuItems: () => [<MenuItem key="action">Action</MenuItem>],
        initialState: {
            columnPinning: { left: ['mrt-row-actions', 'empname'], right: [] },
        },
    });

  return (
    <div>
        <h3>PAYROLL</h3>
        <TableContainer component={Paper}>
            <MaterialReactTable table={table} />
        </TableContainer>
    </div>
  );
}

export default Payrolll;
