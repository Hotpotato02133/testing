import React from 'react';
import MUIDataTable from 'mui-datatables';

const TestTable = ({ userData }) => {
  const columns = [
    {
      name: 'id',
      label: 'ID',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'title',
      label: 'Title',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'price',
      label: 'Price',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'description',
      label: 'Description',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'category',
      label: 'Category',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'rating',
      label: 'Rating',
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const options = {
    filterType: 'checkbox',
  };

  return (
    <MUIDataTable
      title={'Employee List'}
      data={userData}
      columns={columns}
      options={options}
    />
  );
};

export default TestTable
