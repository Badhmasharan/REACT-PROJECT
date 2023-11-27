import "./Shopnow.css"
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

export default function Shopnow() {
  
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
    const giftitems = () => {
      navigate('/giftitems');
    };
 
  

  return (
    <div className='header1'>
        <div className='shipping1'>
            <div className='icon1'>
              <LiaShippingFastSolid />
            </div>
            <div className='delivery1'>
              <p>Free delivery for purchases above $2000  </p>
            </div>
            <div className='topic1'>
            <button className='topicbutton1'onClick={topic}><h1 >WALLe</h1></button>
            </div>
            <div className='user1'>
            <button onClick={handleSign}><VscAccount /></button>
            </div>
            <div className='user1'>
            <button onClick={handleSign1}><IoIosLogOut /></button>
            </div>
        </div>
        <div className='header21'>
          <div className='Location1'>
            <button><IoLocationOutline />  <b>Location</b></button>
          </div>
          <div className='searchbar1'>
            <input type='text'  placeholder='Search Items'></input>
            <button><FaMagnifyingGlass /></button>
          </div>
          <div className='sell1'>
            <button><BsShop /> <b>Sell</b></button>
          </div>
          <div className='orders1'>
            <button><b>Orders</b></button>
          </div>
          <div className='cart1'>
            <button><PiShoppingCartThin /> <b>Cart</b></button>
          </div>
  
          
        </div>
        <div className='header31'>
          
          <div className='all1'>
            <button> <GiHamburgerMenu /> All</button>
          </div>
          <div className='offers1'>
            <button>Offers</button>
          </div>
          <div className='new1'>
            <button>New Releases</button>
          </div>
          <div className='bestseller1'>
            <button>Best Sellers</button>
          </div>
          <div className='membership1'>
            <button>Membership & Subscription</button>
          </div>
          <div className='gift1'>
          <button onClick={giftitems}>Gift Ideas</button>
          </div>
          <div className='mobile1'>
            <button>Mobiles</button>
          </div>
          <div className='electronics1'>
            <button onClick={electronics}>Electronics</button>
          </div>
          <div className='kitchen1'>
            <button>Home & Kitchen</button>
          </div>
          <div className='fashion1'>
            <button>Fashion</button>
          </div>
          <div className='sports1'>
            <button>Sports & Fitness</button>
          </div>
        </div>
        <div className='header41'>
          <div>
            <img src="https://vrlatech.com/wp-content/uploads/slider/cache/f7466631d70080d7600de1521015e38d/sAltakfA.jpg" className='advertise1'></img>
          </div>
        </div>
        <div className='body11'>
          
          <div className='boxx1'>
            <div className='box11'>
              <h2 className='text1'></h2>
              <img src="https://m.media-amazon.com/images/I/41+s6sqYQ3S._AC_SR400,600_AGcontrast_.jpg" className='pc1'></img>
              <h3 className='shopnow1'><FaRupeeSign />200<br></br> <br></br>ASUS ROG Strix XF120 Whisper-Quiet, 4-pin PWM Fan for PC Cases, Radiators or CPU Cooling (120mm, up to 400,000 Hours lifespan, 5 Years Warranty)</h3>
            </div>
            <div className='box21'>
              <h2 className='text1'></h2>
              <img src="https://m.media-amazon.com/images/I/71jTFnk7XiL._AC_UL480_FMwebp_QL65_.jpg" className='pc01'></img>
              <h3 className='shopnow1'><br></br><FaRupeeSign />200<br></br> <br></br>ASUS ROG Strix G16 (2023) Gaming Laptop, 16” 16:10 FHD 165Hz, GeForce RTX 4060, Intel Core i7-13650HX, 16GB DDR5, 512GB PCIe SSD, Wi-Fi 6E, Windows 11, G614JV-AS73, Eclipse Gray</h3>
            </div>
            <div className='box31'>
              <h2 className='text1'></h2>
              <img src="https://m.media-amazon.com/images/I/613UK2R-kQL._AC_SX569_.jpg" className='pc1'></img>
              <h3 className='shopnow1'><FaRupeeSign />200<br></br> <br></br>ASUS ROG Rapture GT-AX6000 Dual-Band WiFi 6 Extendable Gaming Router, Dual 2.5G Ports, Triple-level Game Acceleration, Mobile Game Mode, Aura RGB</h3>
            </div>
            <div className='box41'>
              <h2 className='text1'></h2>
              <img src="https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_UL480_QL65_.jpg" className='pc1'></img>
              <h3 className='shopnow1'> <FaRupeeSign />200<br></br> <br></br> SAMSUNG 34" Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD, LC34G55TWWNXZA, 2020, Black</h3>
              </div>
          </div>
        
       
          <div className='boxes1'>
            <div className='box51'>
              <h2 className='text1'></h2>
              <img src="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL480_QL65_.jpg" className='pc1'></img>
              <h3 className='shopnow1'><FaRupeeSign />200<br></br> <br></br>HP 24mh FHD Computer Monitor with 23.8-Inch IPS Display (1080p), Built-In Speakers and VESA Mounting, Height/Tilt Adjustment for Ergonomic Viewing, HDMI and DisplayPort - (1D0J9AA#ABA)</h3>
              </div>
            <div className='box61'>
              <h2 className='text1'></h2>
              <img src="https://m.media-amazon.com/images/I/61B8Lq5NXmL._AC_UL480_QL65_.jpg" className='pc1'></img>              
              <h3 className='shopnow1'><FaRupeeSign />200<br></br> <br></br>SAMSUNG 27" T35F Series FHD 1080p<br></br>  Computer Monitor, 75Hz, IPS Panel, HDMI, VGA (D-Sub), 3-Sided Border-Less, FreeSync, LF27T350FHNXZA</h3>
              </div>
            <div className='box71'>
              <h2 className='text1'></h2>
              <img src="https://m.media-amazon.com/images/I/61twhaihHtL._AC_UL480_FMwebp_QL65_.jpg" className='pc1'></img>
              <h3 className='shopnow1'> <FaRupeeSign />200<br></br> <br></br>AMD Ryzen 5 5600X 6-core, 12-Thread<br></br> Unlocked Desktop Processor with Wraith <br></br>Stealth Cooler</h3>
              </div>
            <div className='box81'>
              <h2 className='text1'></h2>
              <img src="https://m.media-amazon.com/images/I/71WnTimV+OL._AC_UL480_FMwebp_QL65_.jpg" className='pc1'></img>
              <h3 className='shopnow1'><FaRupeeSign />200<br></br> <br></br> Dell S2722QC 27-inch 4K USB-C Monitor - UHD (3840 x 2160) Display, 60Hz Refresh Rate, 8MS Grey-to-Grey Response Time (Normal Mode), Built-in Dual 3W Speakers, 1.07 Billion Colors Platinum Silver</h3>
              </div>
          </div>
          <div className='boxes11'>
            <div className='box51'>
              <h2 className='text1'></h2>
              <img src="https://m.media-amazon.com/images/I/61JHnTxTJiL._AC_UY327_FMwebp_QL65_.jpg" className='pc1'></img>
              <h3 className='shopnow1'><FaRupeeSign />290<br></br> <br></br> ViprTech Prime Gaming PC Computer Desktop - Intel Core i5 3rd Gen, GeForce GTX 750 4GB, 16GB RAM, 1TB HDD, WiFi, RGB Lighting, Windows 10 Pro, Streaming, Editing, White</h3>
              </div>
            <div className='box61'>
              <h2 className='text1'></h2>
              <img src="https://m.media-amazon.com/images/I/61wsH0j5SvL._AC_UY327_QL65_.jpg" className='pc1'></img>              
              <h3 className='shopnow1'><FaRupeeSign />405<br></br> <br></br>MSI Aegis R (Tower) Gaming Desktop, Intel Core i5-12400F, GeForce RTX 4060, 16GB Memory (8GB x 2), 1TB SSD, USB Type-C, VR-Ready, Windows 11 Home Plus,Black</h3>
              </div>
            <div className='box71'>
              <h2 className='text1'></h2>
              <img src="https://m.media-amazon.com/images/I/41eKOUzTMjL._AC_UY327_FMwebp_QL65_.jpg" className='pc1'></img>
              <h3 className='shopnow1'><FaRupeeSign />490<br></br> <br></br>Intel Core i7 Gaming Computer, Core i7 2600 8-Threads, 3.8 GHz, 16GB RAM, NVIDIA Geforce GT 1030 2GB GDDR5, 512 GB SSD, 802.11AC WiFi & Win 11 Prof</h3>
              </div>
            <div className='box81'> 
              <h2 className='text1'></h2>
              <img src="https://m.media-amazon.com/images/I/91jHNGBFflL._AC_UY327_FMwebp_QL65_.jpg" className='pc1'></img>
              <h3 className='shopnow1'><FaRupeeSign />200<br></br> <br></br>Skytech Gaming Chronos Mini Gaming PC Desktop – Intel Core i3 10100F 3.6 GHz, GTX 1650, 500GB SSD, 16G DDR4 3200, 600W Gold PSU, AC Wi-Fi, Windows 10 Home 64-bit,Black</h3>
              </div>
          </div>

          
        </div>
        {/* <div className='body21'>

        </div>
        <div className='body31'>
          <p className='smartad1'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className='click'>
            <button className='me1'>Shop Now</button>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          </p>
          
          <div className='check1'>
            
           <div className='popular1'>
            <h2 className='ps1'>Popular searches</h2>
            <br></br>
            <div className='imgs1'>
            <img src="https://m.media-amazon.com/images/I/415N3L8jVvL._AC_SY200_.jpg"></img>
            <img src="https://m.media-amazon.com/images/I/81Vekenn4lL._AC_SY200_.jpg"></img>
            <img src="https://m.media-amazon.com/images/I/91MvyMn3UpL._AC_SY200_.jpg"></img>
            <img src="https://m.media-amazon.com/images/I/71CmEDQIn-S._AC_SY200_.jpg"></img>
            <img src="https://m.media-amazon.com/images/I/81Q1KUdpwJL._AC_SY200_.jpg"></img>
            <img src="https://m.media-amazon.com/images/I/71Z-Dmc7RoL._AC_SY200_.jpg"></img>
            </div>
           </div>
          </div>
          </div> */}
          <div className='body41'>
            <div>
              <h2 className='h21'>Get to Know Us</h2>
              <p className='p1'>About us</p>
              <p className='p1'>Careers</p>

            </div>
            <div>
              <h2 className='h21'>Connect with us</h2>
              <p className='p1'>Instagram</p>
              <p className='p1'>Twitter</p>
              <p className='p1'>Facebook</p>
            </div>
            <div>
              <h2 className='h21'>Make Money with Us</h2>
              <p className='p1'>Sell on WALLe</p>
              <p className='p1'>WALLe Global Selling</p>
              <p className='p1 '>Advertise Your Products</p>
              <p className='p1'>Become an Affiliate</p>
            </div>
            <div>
              <h2 className='h21'>Let Us Help You</h2>
              <p className='p1'>Help</p>
              <p className='p1'>Returns Centre</p>
            </div>

         
          </div>
      

        </div>
    
  )
}
