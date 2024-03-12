import React from 'react';
import MUIDataTable from 'mui-datatables';

function ConsoTable({ items }) {
    console.log('items', items)
  const columns = [
    {
      name: 'cashier',
      label: 'Cashier',
    },
    {
      name: 'branchCode',
      label: 'Branch Code',
    },
    {
      name: 'reportDate',
      label: 'Date',
    },
    {
      name: 'dayOfWeek',
      label: 'Day',
    },
  ];

  const options = {
    filterType: 'checkbox',
    responsive: 'vertical',
  };

  return (
    <MUIDataTable
      title={'Conso Table'}
      data={items}
      columns={columns}
      options={options}
    />
  );
}

export default ConsoTable;
