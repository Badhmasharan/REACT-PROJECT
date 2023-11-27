// import React, { useState } from 'react';
// import { TextField, Button, Container } from '@mui/material';
// import { useNavigate } from 'react-router-dom';


// const Loginpg = () => {
//   const navigate = useNavigate();

//   const handleSignin = () => {
//     navigate('/');
//   };
//   const handlesignup=()=>{
//     navigate('/signup')
//   }
//   const handlepass=()=>{
//     navigate('/forgot')
//   }

//     return(
//     <div className='loginnn'>
//     <div className='split'>
//       <h1 className='brand'>WALL<span>e</span></h1>
//       <h4 className='slogan'> A few clicks is all it takes.</h4>
//     </div>
    
//     <div class="wrapper">
      
//       <div>
//       <form action=""> 
//         <h2>LOGIN</h2>  
//         <div class="input-box">
//           <input type="text" placeholder="Username" required/>
//           <i class='bx bxs-user'></i>
//         </div>
//         <div class="input-box1">
//           <input type="password" placeholder="Password" required/>
//           <i class='bx bxs-lock-alt'></i>
//         </div>
//         <div><br></br></div>
//         <div class="remember-forgot">
//           <label><input type="checkbox" className='check'/>Remember me</label>
//           <a onClick={handlepass}>Forgot Password?</a>
//         </div>
//         <button type="submit" class="btn" onClick={handleSignin}>Login</button>
//         <div class="register-link">
//           <p>Don't have an account? <a onClick={handlesignup}>Register</a></p> 
//         </div>
//       </form>
      
//       </div>
//     </div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//   </div>
//     );
//     };

// export default Loginpg;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Loginpg = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignin = async () => {
//     try {
//       const response = await axios.post('http://localhost:3005/users', {
//         username,
//         password,
//       });

//       const token = response.data.token;

//       // Save the token to local storage or a state management solution
//       // For example, localStorage.setItem('token', token);

//       // Redirect the user to the home page or another page upon successful login
//       navigate('/');
//     } catch (error) {
//       console.error('Login failed:', error.message);
//       // Handle error, for example, show an error message to the user
//     }
//   };
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginBox.css';

const Loginpg = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for stored credentials on component mount
    const storedUsername = localStorage.getItem('rememberedUsername');
    const storedPassword = localStorage.getItem('rememberedPassword');
    const storedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (storedRememberMe && storedUsername && storedPassword) {
      setUsername(storedUsername);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation: Check if both username and password are provided
    if (!username || !password) {
      alert("Please provide both username and password");
      return;
    }

    // Save credentials to localStorage if "Remember Me" is checked
    if (rememberMe) {
      localStorage.setItem('rememberedUsername', username);
      localStorage.setItem('rememberedPassword', password);
      localStorage.setItem('rememberMe', true);
    } else {
      // Clear localStorage if "Remember Me" is unchecked
      localStorage.removeItem('rememberedUsername');
      localStorage.removeItem('rememberedPassword');
      localStorage.removeItem('rememberMe');
    }

    axios
      .get(`http://localhost:3005/users?username=${username}&password=${password}`)
      .then((res) => {
        if (res.data.length > 0) {
          navigate("/");
        } else {
          alert("User account doesn't exist");
        }
      });
  };

  const handlesignup = () => {
    navigate('/signup');
  };

  const handlepass = () => {
    navigate('/forgot');
  };

  return (
    <div className='loginnn'>
      <div className='split'>
        <h1 className='brand'>WALL<span>e</span></h1>
        <h4 className='slogan'>A few clicks is all it takes.</h4>
      </div>

      <div className="wrapper">
        <div>
          <form action="">
            <h2>LOGIN</h2>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={handleUsername}
              />
              <i className='bx bxs-user'></i>
            </div>
            <div className="input-box1">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={handlePassword}
              />
              <i className='bx bxs-lock-alt'></i>
            </div>
            <div><br></br></div>
            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  className='check'
                  checked={rememberMe}
                  onChange={handleRememberMe}
                />
                Remember me
              </label>
              <a onClick={handlepass}>Forgot Password?</a>
            </div>
            <button type="button" className="btn" onClick={handleSubmit}>
              Login
            </button>
            <div className="register-link">
              <p>Don't have an account? <a onClick={handlesignup}>Register</a></p>
            </div>
          </form>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Loginpg;
