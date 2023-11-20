// import logo from './logo.svg';
// import './Loginpg/LoginBox.css';
// import Loginpg from './Loginpg/Loginpg';
// import Signuppg from './Signuppg/Signup';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar/Navbar';


// function App() {
//   return (
//     <div className="Box">
      
//       <Router>
//       <Routes>
//         <Route path="/h" element={<Loginpg />} />
//         <Route path="/signup" element={<Signuppg></Signuppg>} />
//         <Route path="/" element={<Navbar/>} />
//       </Routes>
//       </Router>
      
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Navbar from './Navbar/Navbar'

export default function App() {
  return (
    <div>
      <Navbar/>
    </div>
  )
}

