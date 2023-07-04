import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavBar = () => {
  return (
    <AppBar position="static">
    <Toolbar>
      
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Bank of React
      </Typography>
      
    </Toolbar>
  </AppBar>
  )
}

export default NavBar