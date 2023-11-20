// import React, { useState } from 'react';
// import { TextField , Button , Container } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Loginpg= () => {
//   const navigate= useNavigate();
//   const handleSign=()=>{
//     navigate('/Signup')
//   }
//   const [username, setUsername] = useState('');
//   const handleUsername = (event) => { 
//       setUsername(event.target.value) 
//   }

//   const [password, setPassword] = useState('');
//   const handlePassword = (event) => { 
//       setPassword(event.target.value) 
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <Container maxWidth="xs">
//       <h1 align="center"><b>LOGIN</b></h1>
//       <form onSubmit={handleSubmit}>

//         <TextField variant="outlined" margin="normal" required fullWidth label="Username" onChange={handleUsername}>
//             {username}
//         </TextField>

//         <TextField variant="outlined" margin="normal" required fullWidth label="Password" type="password" onChange={handlePassword}>
//             {password}
//         </TextField>
//         <br></br>
//         <br></br>
//         <div id='BoxSize'>       
//         <Button type="submit" fullWidth variant="contained" color="primary" >
//           LOGIN
//         </Button>
//         <Button type="SIGN UP" fullWidth variant="contained" color="primary" onClick={handleSign}>
//           SIGN UP
//         </Button>
//         </div>

    
//       </form>
//     </Container>
//   );
// };

// export default Loginpg;


// Loginpg.js
import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Loginpg = () => {
  const navigate = useNavigate();

  const handleSign = () => {
    navigate('/home');
  };

  const [username, setUsername] = useState('');
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const [password, setPassword] = useState('');
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="xs">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Username"
          onChange={handleUsername}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          onChange={handlePassword}
        />
        <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleSign}>
          Log In
        </Button>
        <br></br>
        <Button type="submit" fullWidth variant="contained" color="primary" >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default Loginpg;
