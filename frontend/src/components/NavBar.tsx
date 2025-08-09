import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {

    const tokenValue = localStorage.getItem("token");
    const navigate = useNavigate()

    const tokenFunction = () => {
        if(tokenValue){
            localStorage.setItem("token", "")
            navigate('/login')
        }
    }
    
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Shop
        </Typography>
        <Button color="inherit" component={Link} onClick={tokenFunction} to="/login">{tokenValue ? 'Logout' : 'Login'}</Button>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/cart">Cart</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
