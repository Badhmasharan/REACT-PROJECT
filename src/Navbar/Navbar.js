import "./Navbar.css"
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

import { TextField, Button, Container } from '@mui/material';
import Furniture from "./Furniture";

export default function Smartwatch() {
  const [item,setitem]=useState("Signin")
  
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
    const shopnow = () => {
      navigate('/shopnow');
    };
 
    const electronics = () => {
      navigate('/electronics');
    };
    const topic = () => {
      navigate('/');
    };
 
    const smartwatch = () => {
      navigate('/smartwatch');
    };
    const smartphone = () => {
      navigate('/smartphone');
    };
    const toys = () => {
      navigate('/toys');
    };
    const giftitems = () => {
      navigate('/giftitems');
    };
 
    const furniture = () => {
      navigate('/furniture');
    };
    const everything = () => {
      navigate('/everything');
    };
    const pantry = () => {
      navigate('/pantry');
    };
    const cart = () => {
      navigate('/cart');
    };
 
 
 
 

  return (
    <div className='header'>
        <div className='shipping'>
            <div className='icon'>
              <LiaShippingFastSolid />
            </div>
            <div className='delivery'>
              <p>Free delivery for purchases above $2000  </p>
            </div>
            <div className='topic'>
            <button className='topicbutton'onClick={topic}><h1 >WALLe</h1></button>
            </div>
            <div className='user'>
            <button onClick={handleSign}><VscAccount /></button>
            </div>
            <div className='user'>
            <button onClick={handleSign1}><IoIosLogOut /></button>
            </div>
        </div>
        <div className='header2'>
          <div className='Location'>
            <button><IoLocationOutline />  <b>Location</b></button>
          </div>
          <div className='searchbar'>
          < input type="text"  placeholder="Search..."></input>

            <button><FaMagnifyingGlass /></button>
          </div>
          <div className='sell'>
            <button><BsShop /> <b>Sell</b></button>
          </div>
          <div className='orders'>
            <button><b>Orders</b></button>
          </div>
          <div className='cart'>
            <button onClick={cart}><PiShoppingCartThin /> <b>Cart</b></button>
          </div>
  
          
        </div>
        <div className='header3'>
          
          <div className='all'>
            <button> <GiHamburgerMenu /> All</button>
          </div>
          <div className='offers'>
            <button>Offers</button>
          </div>
          <div className='new'>
            <button>New Releases</button>
          </div>
          <div className='bestseller'>
            <button>Best Sellers</button>
          </div>
          <div className='membership'>
            <button>Membership & Subscription</button>
          </div>
          <div className='gift'>
            <button onClick={giftitems}>Gift Ideas</button>
          </div>
          <div className='mobile'>
            <button onClick={smartphone}>Mobiles</button>
          </div>
          <div className='electronics'>
            <button onClick={electronics}>Electronics</button>
          </div>
          <div className='kitchen'>
            <button>Home & Kitchen</button>
          </div>
          <div className='fashion'>
            <button>Fashion</button>
          </div>
          <div className='sports'>
            <button>Sports & Fitness</button>
          </div>
        </div>
        <div className='header4'>
          <div>
            <img src="https://i.ytimg.com/vi/AFFdD-T3gjI/maxresdefault.jpg"  className='advertise'></img>
          </div>
        </div>
        <div className='body1'>
          
          <div className='boxx'>
            <div className='box1'>
              <h2 className='text'>Deals in PCs</h2>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" className='pc'></img>
              <h3 className='shopnow' onClick={shopnow}>Shop now</h3>
            </div>
            <div className='box2'>
              <h2 className='text'>Toys under $20</h2>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" className='pc'></img>
              <h3 className='shopnow' onClick={toys}> Shop now</h3>
            </div>
            <div className='box3'>
              <h2 className='text'>Furnitures under $80</h2>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_1X_Furnitrure_v2._SY304_CB577544739_.jpg" className='pc'></img>
              <h3 className='shopnow' onClick={furniture}> Shop now</h3>
            </div>
            <div className='box4'>
              <h2 className='text'>Deals on smart watches</h2>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg" className='pc'></img>
              <h3 className='shopnow' onClick={smartwatch}> Shop now</h3>
              </div>
          </div>
        
       
          <div className='boxes'>
            <div className='box5'>
              <h2 className='text'>Every thing for your home</h2>
              <img src="https://images-fe.ssl-images-amazon.com/images/G/35/gateway/Discover/discoverbed_379x304_2._SY304_CB429791174_.jpg" className='pc'></img>
              <h3 className='shopnow' onClick={everything}> Shop now</h3>
              </div>
            <div className='box6'>
              <h2 className='text'>Diapers | Starting at $19</h2>
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/PC_CC_379x304V1._SY304_CB616418989_.jpg" className='pc'></img>              
              <h3 className='shopnow'> Shop now</h3>
              </div>
            <div className='box7'>
              <h2 className='text'>Shop pantry</h2>
              <img src="https://images-fe.ssl-images-amazon.com/images/G/35/Consumables/2020/Grocery/pantry2_379x304._SY304_CB435011192_.jpg" className='pc'></img>
              <h3 className='shopnow' onClick={pantry}> Shop now</h3>
              </div>
            <div className='box8'>
              <h2 className='text'>WALLe Fashion</h2>
              <img src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2023/img/Events/XCM_CUTTLE_1623895_3381342_379x304_1X_en_CA._SY304_CB597323048_.jpg" className='pc'></img>
              <h3 className='shopnow'> Shop now</h3>
              </div>
          </div>

          
        </div>
        <div className='body2'>

        </div>
        <div className='body3'>
          <p className='smartad'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className='click'>
            <button className='me'onClick={smartphone}>Shop Now</button>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          </p>
          
          <div className='check'>
            
           <div className='popular'>
            <h2 className='ps'>Popular searches</h2>
            <br></br>
            <div className='imgs'>
            <img src="https://m.media-amazon.com/images/I/415N3L8jVvL._AC_SY200_.jpg"></img>
            <img src="https://m.media-amazon.com/images/I/81Vekenn4lL._AC_SY200_.jpg"></img>
            <img src="https://m.media-amazon.com/images/I/91MvyMn3UpL._AC_SY200_.jpg"></img>
            <img src="https://m.media-amazon.com/images/I/71CmEDQIn-S._AC_SY200_.jpg"></img>
            <img src="https://m.media-amazon.com/images/I/81Q1KUdpwJL._AC_SY200_.jpg"></img>
            <img src="https://m.media-amazon.com/images/I/71Z-Dmc7RoL._AC_SY200_.jpg"></img>
            </div>
           </div>
          </div>
          </div>
          <div className='body4'>
            <div>
              <h2 className='h2'>Get to Know Us</h2>
              <p className='p'>About us</p>
              <p className='p'>Careers</p>

            </div>
            <div>
              <h2 className='h2'>Connect with us</h2>
              <p className='p'>Instagram</p>
              <p className='p'>Twitter</p>
              <p className='p'>Facebook</p>
            </div>
            <div>
              <h2 className='h2'>Make Money with Us</h2>
              <p className='p'>Sell on WALLe</p>
              <p className='p'>WALLe Global Selling</p>
              <p className='p '>Advertise Your Products</p>
              <p className='p'>Become an Affiliate</p>
            </div>
            <div>
              <h2 className='h2'>Let Us Help You</h2>
              <p className='p'>Help</p>
              <p className='p'>Returns Centre</p>
            </div>

         
          </div>
      

        </div>
    
  )
}
