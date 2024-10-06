import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography variant='h6'>Emp_App</Typography>&nbsp;
            <Link to="/form">
            <Button variant="contained" color="secondary" size="medium">Add</Button>
            </Link>&nbsp;
            <Link to="/view">
            <Button variant="contained" color="warning" size="medium">View</Button>
            </Link>
            
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
