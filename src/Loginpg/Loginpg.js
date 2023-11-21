import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Loginpg = () => {
  const navigate = useNavigate();

  const handleSignin = () => {
    navigate('/');
  };
  const handlesignup=()=>{
    navigate('/signup')
  }
  const handlepass=()=>{
    navigate('/forgot')
  }

    return(
  
    <div class="wrapper">
      <form action=""> 
        <h1>WALLe  </h1><h2>LOGIN HERE..</h2>  
        <div class="input-box">
          <input type="text" placeholder="Username" required/>
          <i class='bx bxs-user'></i>
        </div>
        <div class="input-box1">
          <input type="password" placeholder="Password" required/>
          <i class='bx bxs-lock-alt'></i>
        </div>
        <div><br></br></div>
        <div class="remember-forgot">
          <label><input type="checkbox"/>Remember me</label>
          <a onClick={handlepass}>Forgot Password?</a>
        </div>
        <button type="submit" class="btn" onClick={handleSignin}>Login</button>
        <div class="register-link">
          <p>Don't have an account? <a onClick={handlesignup}>Register</a></p> 
        </div>
      </form>
    </div>
    );
    };

export default Loginpg;