 
import React from 'react';
import { AppBar, Toolbar, Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="sticky">
       <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          User Management
        </Typography>
        {/* Navigation links */}
        <Button color="inherit" component={Link} to="/add">
          Add User
        </Button>
        <Button color="inherit" component={Link} to="/manage">
          Manage Users
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
