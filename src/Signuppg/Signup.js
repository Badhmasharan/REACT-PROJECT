// import React, { useState } from 'react';
// import { TextField , Button , Container } from '@mui/material';
// import { useNavigate } from 'react-router-dom';


// const Register= () => {
//   const navigate = useNavigate();

//   const Register = () => {
//     navigate('/login');
//   };

//   return(
//     <div className='loginnn'>
//     <div className='split'>
//       <h1 className='brand'>WALL<span>e</span></h1>
//       <h4 className='slogan'> A few clicks is all it takes.</h4>
//     </div>
  
//     <div class="wrapper">
//       <form action=""> 
//         <h1>Sign Up</h1>
//         <div class="input-box">
//           <input type="text" placeholder="Username" required/>
//           <i class='bx bxs-user'></i>
//         </div>
//         <div class="input-box">
//           <input type="password" placeholder="Password" required/>
//           <i class='bx bxs-lock-alt'></i>
//         </div>
//         <div class="input-box">
//           <input type="password" placeholder="Confirm Password" required/>
//           <i class='bx bxs-lock-alt'></i>
//         </div>
//         <div><br></br></div>
       
//         <button type="submit" class="btn" onClick={Register}>Register</button>
       
//       </form>
//     </div>
//     </div>
//     );
//     };

// export default Register;


import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        console.error('Passwords do not match');
        // You might want to show an error message to the user
        return;
      }

      // Make a request to your server to handle registration
      const response = await axios.post('http://localhost:3005/users', {
        username,
        password,
      });

      // Assuming your server responds with some data upon successful registration
      console.log('Registration successful:', response.data);

      // After successful registration, navigate to the login page
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error.message);
      // Handle error, for example, show an error message to the user
    }
  };

  return (
    <div className='loginnn'>
      <div className='split'>
        <h1 className='brand'>WALL<span>e</span></h1>
        <h4 className='slogan'>A few clicks is all it takes.</h4>
      </div>

      <div className="wrapper">
        <form action="">
          <h1>Sign Up</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div><br></br></div>

          <button type="button" className="btn" onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
