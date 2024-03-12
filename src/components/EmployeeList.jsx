import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Badge from '@mui/material/Badge';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'email', label: 'Email\u00a0', minWidth: 100 },
  {
    id: 'messages',
    label: 'Messages',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'left'
  },
];

function createData(name, email, messages, date, status) {
  return { name, email, messages, date, status };
}

const rows = [
  createData('John Smith', 'johnsmith123@gmail.com', 'Hi I have some queries handahwiudh', '02-14-2024', 'Approved'),
  createData('Emily Johnson', 'emilyjohnson45@gmail.com', 'Hi I have some queries', '02-14-2024', 'Pending'),
  createData('Michael Brown', 'michaelbrown98@gmail.com', 'Hi I have some queries handahwiudh aiuwdh niawudniauwd iuwab diauwbd iuawdb iuawbdiuawb diu', '02-14-2024', 'Deny'),
  // Add more data as needed
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getStatusBadgeProps = (status) => {
    switch (status) {
      case 'Approved':
        return { color: 'success' };
      case 'Pending':
        return { color: 'warning' };
      case 'Deny':
        return { color: 'error' };
      default:
        return {};
    }
  };

  return (
    <Paper variant='elevation' sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, textAlign: 'left', fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow style={{ textAlign: 'left'}} hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell style={{ textAlign: 'left'}} key={column.id} align={column.align}>
                          {column.id === 'status' ? (
                            <React.Fragment>
                              <Badge {...getStatusBadgeProps(value)} badgeContent={value} />
                            </React.Fragment>
                          ) : (
                            column.format && typeof value === 'number'
                              ? column.format(value)
                              : value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
