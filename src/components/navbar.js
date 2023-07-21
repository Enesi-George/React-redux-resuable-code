import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
    return (
      <AppBar position="static" 
      sx={{
        backgroundColor:'transparent !important', 
        boxShadow:'none'
        }}>
        <Toolbar >
          <GitHubIcon sx={{ fontSize: 32, }} />
          <Typography
           variant="h6" component="div" 
           sx={{ 
            flexGrow: 1, 
            textAlign:'left',
            px:1
            }}>
            Github Users
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    );
  };

export default Navbar;