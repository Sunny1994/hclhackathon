// pages/Login.tsx
import React, { useState } from 'react';
import { loginUser } from '../api/strapi.ts';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import ErrorPopup from '../components/common/Errorpopup.tsx';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorOpen, setErrorOpen] = useState(false);
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await loginUser(email, password);
      if (res.error || !res.jwt) {
        setErrorOpen(true);
      } else {
        localStorage.setItem('token', res.jwt);
        navigate('/')
      }
    } catch {
      setErrorOpen(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLogin}>Login</Button>
      </Box>

      <ErrorPopup
        open={errorOpen}
        message="Invalid user credentials"
        onClose={() => setErrorOpen(false)}
      />
    </Container>
  );
};

export default Login;
