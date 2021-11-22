import React from 'react'
import './userlist.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlineTwoTone } from '@material-ui/icons';

import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {
  const [data, setData] = useState(userRows);

  const deleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username',
      headerName: 'User',
      width: 210,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} alt='Avatar' className='userListImg' />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 210 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineTwoTone
              className='userListDelete'
              onClick={() => {
                deleteHandler(params.row.id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userlist'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
