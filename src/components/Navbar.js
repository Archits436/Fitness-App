import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo1 from '../assets/images/Logo-1.png';

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{ gap: { sm: '122px', xs: '10px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none', ml: { lg: '30px' } }} px='20px'>
      <Link to='/'>
        <img src={Logo1} alt="logo" style={{ width: '200px', height: '41px' }} />
      </Link>
      <Stack direction='row' gap='30px' fontSize='24px' alignItems='flex-end' sx={{ display: { xs: 'none' } }}>
        <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href='#exercises' style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar;