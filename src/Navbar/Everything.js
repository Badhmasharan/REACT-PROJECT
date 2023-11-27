import "./Electronics.css"
import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import Signuppg from "../Signuppg/Signup";
import { IoIosLogOut } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { FaRupeeSign } from "react-icons/fa";
import { TextField, Button, Container } from '@mui/material';

export default function Everything() {
  
    const navigate = useNavigate();
  
    const handleSign = () => {
      navigate('/login');
    };
    const handleSign1 = () => {
      navigate('/login');
    };
    const handlepc = () => {
      navigate('/pc');
    };
    const electronics = () => {
        navigate('/electronics');
      };
      const topic = () => {
        navigate('/');
      };
      const smartphone = () => {
        navigate('/smartphone');
      };
      const giftitems = () => {
        navigate('/giftitems');
      };
      
  

  return (
    <div className='header12'>
        <div className='shipping12'>
            <div className='icon12'>
              <LiaShippingFastSolid />
            </div>
            <div className='delivery12'>
              <p>Free delivery for purchases above $2000  </p>
            </div>
            <div className='topic12'>
            <button className='topicbutton12'onClick={topic}><h1 >WALLe</h1></button>
            </div>
            <div className='user12'>
            <button onClick={handleSign}><VscAccount /></button>
            </div>
            <div className='user12'>
            <button onClick={handleSign1}><IoIosLogOut /></button>
            </div>
        </div>
        <div className='header212'>
          <div className='Location12'>
            <button><IoLocationOutline />  <b>Location</b></button>
          </div>
          <div className='searchbar12'>
            <input type='text'  placeholder='Search Items'></input>
            <button><FaMagnifyingGlass /></button>
          </div>
          <div className='sell12'>
            <button><BsShop /> <b>Sell</b></button>
          </div>
          <div className='orders12'>
            <button><b>Orders</b></button>
          </div>
          <div className='cart12'>
            <button><PiShoppingCartThin /> <b>Cart</b></button>
          </div>
  
          
        </div>
        <div className='header312'>
          
          <div className='all12'>
            <button> <GiHamburgerMenu /> All</button>
          </div>
          <div className='offers12'>
            <button>Offers</button>
          </div>
          <div className='new12'>
            <button>New Releases</button>
          </div>
          <div className='bestseller12'>
            <button>Best Sellers</button>
          </div>
          <div className='membership12'>
            <button>Membership & Subscription</button>
          </div>
          <div className='gift12'>
            <button onClick={giftitems}>Gift Ideas</button>
          </div>
          <div className='mobile12'>
            <button onClick={smartphone}>Mobiles</button>
          </div>
          <div className='electronics12'>
            <button onClick={electronics}>Electronics</button>
          </div>
          <div className='kitchen12'>
            <button>Home & Kitchen</button>
          </div>
          <div className='fashion12'>
            <button>Fashion</button>
          </div>
          <div className='sports12'>
            <button>Sports & Fitness</button>
          </div>
        </div>
        
        <div className='body112'>
       <div className='header412'>
          <div>
            <img src="https://m.media-amazon.com/images/G/31/img21/BAU/Header/Bestseller/MobPC/Bestseller-Pc._SX3000_QL85_.jpg" className='advertise12'></img>
          </div>
        </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71gpsgDkwhL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br>Take Interio- Double Bed, 3 Year Warranty, Engineered Wood, Modern Living, Engineered Wood Bed - Sleek Design & Durability</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/21kn5G2Ab-L._AC_SR400,600_AGcontrast_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>SHALIMAR Large Capacity Travel Bag/Storage Bag/Move-in Bags/Duffel Bag - Strong, Durable, Foldable and Water Resistant </h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/512Fnu5DUIL._AC_SR400,600_AGcontrast_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>Cello Creta Laundry Bag/Basket with lid, Dark Brown, 50 Ltrs.,Plastic</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/51J44+wgw7L._AC_SR400,600_AGcontrast_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Roseate Premium (40x60 cm) Solid 2000 GSM Microfiber Bath Mat Super Absorbent/Anti-Skid Door Mats</h3>
              </div>
          </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/41GpoYiwe3L._AC_SR400,600_AGcontrast_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br>FOVERA Foldable Meditation Chair, Floor Chair for Living Room & Outdoor, Meditation Block, SS Frame & Washable Cover </h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61Ct6+KF4AL._AC_UL480_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>Samsung 7 kg, 5 star, Eco Bubble Technology, Digital Inverter, Motor, Soft Closing Door, Fully-Automatic Top Load Washing Machine</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/51Ms9dLUSfL._AC_SR400,600_AGcontrast_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>Huesland by Ahmedabad Cotton Pillow Cover Set (2 Pcs) - 18 x 27 inches</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/41yLhg0LTvL._AC_SR400,600_AGcontrast_.jpg " className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Garbnoire 8 in 1 Heavy Duty Hose Nozzle Water Spray High Pressure for Gardening, Flower, Plants, Lawn| Multi Functional Cleaning, Showering Pet & Wash Cars</h3>
              </div>
          </div>
          <div className='boxes112'>
            <div className='box512'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/416MTgo6K9L._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />290<br></br> <br></br>Universal 360 Wheels For Furniture Moving Heavy Duty Caster Wheels Set For Table Furniture Mini Swivel Casters Wheels</h3>
              </div>
            <div className='box612'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/51mBkGbPShL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>              
              <h3 className='shopnow12'><FaRupeeSign />405<br></br> <br></br>Indiid Homes Rattan Furniture Hammock Single Seater Swing Chair With Stand&Cushion Hanging Ssswing</h3>
              </div>
            <div className='box712'>
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/71U1ZapXmcL._AC_UL480_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />490<br></br> <br></br>TANWAR HANDICRAFT Sheesham Wood Nesting Table Set of 3 Pieces Stool for Living Room | Nesting Stool Sheesham | Wooden Stools | Stool Set of 3 Pieces</h3>
              </div>
            <div className='box812'> 
              <h2 className='text12'></h2>
              <img src="https://m.media-amazon.com/images/I/61x87lPmViL._AC_UL960_FMwebp_QL65_.jpg" className='pc12'></img>
              <h3 className='shopnow12'><FaRupeeSign />200<br></br> <br></br>Figment Bathroom Cleaning Brush Bathroom Cleaning Accessories Tiles Cleaning Brush Bathroom Brush with Long Handle Tile Cleaner Brush Bathroom Floor Cleaning Brush </h3>
              </div>
          </div>

          
          
        </div>
        
        
        
          <div className='body412'>
            <div>
              <h2 className='h212'>Get to Know Us</h2>
              <p className='p12'>About us</p>
              <p className='p12'>Careers</p>

            </div>
            <div>
              <h2 className='h212'>Connect with us</h2>
              <p className='p12'>Instagram</p>
              <p className='p12'>Twitter</p>
              <p className='p12'>Facebook</p>
            </div>
            <div>
              <h2 className='h212'>Make Money with Us</h2>
              <p className='p12'>Sell on WALLe</p>
              <p className='p12'>WALLe Global Selling</p>
              <p className='p12 '>Advertise Your Products</p>
              <p className='p12'>Become an Affiliate</p>
            </div>
            <div>
              <h2 className='h212'>Let Us Help You</h2>
              <p className='p12'>Help</p>
              <p className='p12'>Returns Centre</p>
            </div>

         
          </div>
      

        </div>
    
  )
}
