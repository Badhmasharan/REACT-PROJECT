import React, { useState } from 'react';
import { TextField , Button , Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Register= () => {
  const navigate = useNavigate();

  const Register = () => {
    navigate('/h');
  };

  return(
  
    <div class="wrapper">
      <form action=""> 
        <h1>Sign Up</h1>
        <div class="input-box">
          <input type="text" placeholder="Username" required/>
          <i class='bx bxs-user'></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" required/>
          <i class='bx bxs-lock-alt'></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Confirm Password" required/>
          <i class='bx bxs-lock-alt'></i>
        </div>
        <div><br></br></div>
       
        <button type="submit" class="btn" onClick={Register}>Register</button>
       
      </form>
    </div>
    );
    };

export default Register;

// const [username, setUsername] = useState('');
// const handleUsername = (event) => {
//   setUsername(event.target.value);
// };

// const [password, setPassword] = useState('');
// const handlePassword = (event) => {
//   setPassword(event.target.value);
// };
// const [password1, confirmPassword] = useState('');
//   const handlePassword1 = (event) => { 
//       setPassword(event.target.value) 
//   };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log('Username:', username);
//   console.log('Password:', password);
// };

// return (
//   <Container maxWidth="xs">
//     <h1>Sign Up</h1>
//     <form onSubmit={handleSubmit}>
//       <TextField
//         variant="outlined"
//         margin="normal"
//         required
//         fullWidth
//         label="Username"
//         onChange={handleUsername}
//       />
//       <TextField
//         variant="outlined"
//         margin="normal"
//         required
//         fullWidth
//         label="Password"
//         type="password"
//         onChange={handlePassword}
//       />
//       <TextField
//         variant="outlined"
//         margin="normal"
//         required
//         fullWidth
//         label="Confirm Password"
//         type="password"
//         onChange={handlePassword1}
//       />
      
//       <Button type="submit" fullWidth variant="contained" color="primary" onClick={Register}>
//         Register
//       </Button>
//     </form>








//   </Container>
// );
// };

// export default Register;
