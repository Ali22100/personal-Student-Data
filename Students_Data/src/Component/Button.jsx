// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/RemoveCircle';
import AddIcon from '@mui/icons-material/AddCircle';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f5b7f' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Manage <span style={{ fontWeight: 800 }}>Employees</span>
        </Typography>

        <Box>
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            sx={{
              backgroundColor: '#e74c3c',
              '&:hover': { backgroundColor: '#c0392b' },
              marginRight: 1
            }}
          >
            Delete
          </Button>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: '#2ecc71',
              '&:hover': { backgroundColor: '#27ae60' }
            }}
          >
            Add New Employee
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
