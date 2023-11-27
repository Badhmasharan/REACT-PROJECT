import logo from './logo.svg';
import './Loginpg/LoginBox.css';
import Loginpg from './Loginpg/Loginpg';
import Signuppg from './Signuppg/Signup';
import Forgot from './log/Forgot';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Shopnow from './Navbar/Shopnow';
import Electronics from './Navbar/Electronics';
import Smartwatch from './Navbar/Smartwatch';
import Smartphone from './Navbar/Smartphone';
import Toys from './Navbar/Toys';
import Giftitems from './Navbar/Giftitems';
import Furniture from './Navbar/Furniture';
import Everything from './Navbar/Everything';
import Pantry from './Navbar/Pantry';
import Cart from './Navbar/Cart';


function App() {
  return (
    <div className="Box">
      
      <Router>
      
      <Routes>
        <Route path="/login" element={<Loginpg />} />
        <Route path="/signup" element={<Signuppg/>} />
        <Route path="/" element={<Navbar/>} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/shopnow" element={<Shopnow/>} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/smartwatch" element={<Smartwatch/>} />
        <Route path="/smartphone" element={<Smartphone/>} />
        <Route path="/toys" element={<Toys/>} />
        <Route path="/giftitems" element={<Giftitems/>} />
        <Route path="/furniture" element={<Furniture/>}/>
        <Route path="/everything" element={<Everything/>}/>
        <Route path="/pantry" element={<Pantry/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
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

