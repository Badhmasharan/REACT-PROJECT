import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Forgot = () => {
  const navigate = useNavigate();

  const handlepass = () => {
    navigate('/h');
  };
 
  return(
  
    <div class="wrapper">
      <form action=""> 
        <h1>Forgot Password</h1>
        <div class="input-box">
          <input type="text" placeholder="Username" required/>
          <i class='bx bxs-user'></i>
        </div>
        <div class="input-box">
          <input type="number" placeholder="Phone Number" required/>
          <i class='bx bxs-lock-alt'></i>
        </div>
        <div><br></br></div>
        <div class="remember-forgot">

          <a>Send Otp</a>
        </div>
        <div class="input-box">
          <input type="number" placeholder="OTP" required/>
          <i class='bx bxs-lock-alt'></i>
        </div>
        <div class="input-box">
          <input type="text" placeholder="New Password" required/>
          <i class='bx bxs-user'></i>
        </div>
        
        <button type="submit" class="btn" onClick={handlepass}>Change Password</button>
        
        
      </form>
    </div>
    );
    };

export default Forgot;