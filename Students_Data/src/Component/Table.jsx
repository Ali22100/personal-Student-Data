import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1.5,
  },
  {
    field: 'address',
    headerName: 'Address',
    flex: 2,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    flex: 1.2,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    flex: 0.7,
    renderCell: (params) => (
      <>
        <IconButton color="warning" aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton color="error" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </>
    ),
  },
];

export default function DataTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users?limit=1000')
      .then((res) => {
        const users = res.data.users.map((user) => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          address: `${user.address.address}, ${user.address.city}, ${user.address.state}`,
          phone: user.phone,
        }));
        setRows(users);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
      });
  }, []);

  return (
    <Paper sx={{ width: '98%', height: 600, p: 2 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        pagination
        pageSizeOptions={[5, 10, 25, 50, 100]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        sx={{
          border: 0,
          '.MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
            fontWeight: 'bold',
          },
          '.MuiDataGrid-cell': {
            alignItems: 'center',
          },
          '.MuiCheckbox-root': {
            color: '#999',
          },
        }}
      />
    </Paper>
  );
}
