import logo from './logo.svg';
import './Loginpg/LoginBox.css';
import Loginpg from './Loginpg/Loginpg';
import Signuppg from './Signuppg/Signup';
import Forgot from './log/Forgot';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';


function App() {
  return (
    <div className="Box">
      
      <Router>
      <Routes>
        <Route path="/h" element={<Loginpg />} />
        <Route path="/signup" element={<Signuppg/>} />
        <Route path="/" element={<Navbar/>} />
        <Route path="/forgot" element={<Forgot/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;

// import React from 'react'
// import Navbar from './Navbar/Navbar'
// import Rro from './log/log'

// export default function App() {
//   return (
//     <div>
//       <Rro/>
//     </div>
//   )
// }

