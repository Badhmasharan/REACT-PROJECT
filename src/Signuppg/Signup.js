import React, { useState } from 'react';
import { TextField , Button , Container } from '@mui/material';
const Signuppg= () => {

  const [username, setUsername] = useState('');
  const handleUsername = (event) => { 
      setUsername(event.target.value) 
  }

  const [password, setPassword] = useState('');
  const handlePassword = (event) => { 
      setPassword(event.target.value) 
  }
  const [password1, confirmPassword] = useState('');
  const handlePassword1 = (event) => { 
      setPassword(event.target.value) 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="xs">
      <h1 align="center"><b>SIGN UP</b></h1>
      <form onSubmit={handleSubmit}>

        <TextField variant="outlined" margin="normal" required fullWidth label=" Create Username" onChange={handleUsername}>
            {username}
        </TextField>

        <TextField variant="outlined" margin="normal" required fullWidth label="Set Password" type="password" onChange={handlePassword}>
            {password}
        </TextField>
       
        <TextField variant="outlined" margin="normal" required fullWidth label="Confirm Password" type="password" onChange={handlePassword}>
            {password}
        </TextField>

        <Button type="submit" fullWidth variant="contained" color="primary">
          REGISTER
        </Button>
      </form>
    </Container>
  );
};

export default Signuppg;