import * as React from 'react';
import {useState} from 'react'
import {
  Avatar,
  Box,
  Typography,
  Container,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LogIn from '../components/landing/LogIn'
import SignUp from '../components/landing/SignUp'

export default function Landing() {
  const [formType, setFormType] = useState("login")
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Curriculum Tool
        </Typography>
        {formType === 'login' ? <LogIn swapForm={setFormType}/> : <SignUp swapForm={setFormType}/>}
      </Box>
    </Container>
  );
}